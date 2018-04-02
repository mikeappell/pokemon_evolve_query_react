import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import ToggleButton from 'react-toggle-button';
import Collapsible from 'react-collapsible';
import './styles/App.css';

import { PokeDB } from './PokemonData';
import { Constants } from './Constants';

class App extends Component {
  // TODO: Make default value of currentQuery more programmatic
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
      evolving: true,
      includeBabies: true,
      includeSpecial: true,
      includeEvoItemPokemon: false,
      includeLegendaries: false,
      includeNoHigherEvolutions: false,
      selectedPreCreatedQueryCheckbox: 'Compact',
      language: 'English',
    };

    // Calculate the initial state of toggled Pokemon based on the default query
    const allowedPokemonFamiliesPerGeneration = this.getAllowedPokemonFamiliesPerGeneration();
    const lastGenerationFamilies = allowedPokemonFamiliesPerGeneration[allowedPokemonFamiliesPerGeneration.length - 1].families;
    const lastFamily = lastGenerationFamilies[lastGenerationFamilies.length - 1];
    const lastPokemonNumber = parseInt(lastFamily[lastFamily.length - 1].number, 10);

    let toggled = {};
    for (let i = 1; i <= lastPokemonNumber; i++) {
      toggled[i] = (Constants.QUERIES.Full.query.includes(i.toString()) ? true : false);
    }

    this.state = Object.assign({}, this.state, {
      toggled,
    });
  }

  metaTagsToSkip() {
    let metaTagsToSkip = [];
    if (!this.state.includeNoHigherEvolutions) metaTagsToSkip = metaTagsToSkip.concat('nohigher');
    if (!this.state.includeEvoItemPokemon) metaTagsToSkip = metaTagsToSkip.concat('needevo', 'isevo');
    if (!this.state.includeLegendaries) metaTagsToSkip = metaTagsToSkip.concat('legend');
    if (!this.state.includeBabies) metaTagsToSkip = metaTagsToSkip.concat('baby');
    if (!this.state.includeSpecial) metaTagsToSkip = metaTagsToSkip.concat('special');

    return metaTagsToSkip;
  }

  // Returns array of Pokemon family arrays, e.g.
  // [
  //   [
  //     { name: "Bulbasaur", number: "1", evolution: 1 },
  //     { name: "Ivysaur", number: "2", evolution: 2 },
  //     { name: "Venusaur", number: "3", evolution: 3 }
  //   ],
  //   [ ... ], // Next family in list, e.g. Charmander family
  // ]
  getAllowedPokemonFamilies() {
    const pokemonFamilies = [];
    for (let generation of this.getAllowedPokemonFamiliesPerGeneration()) {
      generation.families.forEach((pokemonFamily) =>
        pokemonFamilies.push(pokemonFamily.filter(individualPokemon => !this.metaTagsToSkip().includes(individualPokemon.meta)))
      )
    }

    return pokemonFamilies.filter(pokemonFamily => pokemonFamily.length > 0);
  }

  // Returns array of Pokemon generation objects, each of of similar structure to getAllowedPokemonFamilies(), e.g.
  // [
  //   {
  //     name: 'Generation 1',
  //     families: [
  //       [
  //         { name: "Bulbasaur", number: "1", evolution: 1 },
  //         { name: "Ivysaur", number: "2", evolution: 2 },
  //         { name: "Venusaur", number: "3", evolution: 3 }
  //       ],
  //       [ ... ], // Next family in list, e.g. Charmander family
  //     ]
  //   },
  //   { ... }, // Next generation in list, e.g. Generation 2
  // ]
  getAllowedPokemonFamiliesPerGeneration() {
    const pokemonFamiliesPerGeneration = [];
    const metaTagsToSkip = this.metaTagsToSkip(); // Caching the results of this function

	let pokemonGenerations = PokeDB.POKEMON_DB;
	let specialPokemon = ["117"]

    for (let generation of pokemonGenerations) {
      const pokemonGeneration = { name: generation.name, families: [] };
      generation.families.forEach((pokemonFamily) => {
        let babyShouldBeFiltered = false;
        let filteredFamily = pokemonFamily.filter(individualPokemon => {
          const skippingThisPokemon = metaTagsToSkip.includes(individualPokemon.meta) && !specialPokemon.includes(individualPokemon.number);
          if (skippingThisPokemon && individualPokemon.meta === 'baby') babyShouldBeFiltered = true;
          return !skippingThisPokemon;
        });

        // Specific to filtering baby pokemon, we decrement the evolution number of the subsequent evolutions if we're filtering babies
        // E.g. { name: 'Pichu', evolution: 1, meta: 'baby' }, { name: 'Pikachu', evolution: 2 }, { name: 'Raichu', evolution: 3 }
        // Becomes { name: 'Pikachu', evolution: 1 }, { name: 'Raichu', evolution: 2 }
        if (babyShouldBeFiltered) filteredFamily.forEach((individualPokemon) => individualPokemon.evolution--);
        pokemonGeneration.families.push(filteredFamily);
      })

      pokemonGeneration.families = pokemonGeneration.families.filter(pokemonFamily => pokemonFamily.length > 0);
      pokemonFamiliesPerGeneration.push(pokemonGeneration);
    }

    return pokemonFamiliesPerGeneration;
  }

  // getFilteredListOfPokemon('candy', 12') returns array of Pokemon numbers whose candy property is '12'
  // e.g. ["1", "4", "7", "10", "13", "16", "19", "21" ... ]
  getFilteredListOfPokemon(filterType, filterCriteria) {
    let filteredPokemonList = [];
    this.getAllowedPokemonFamilies().forEach((pokemonFamily) => {
      pokemonFamily.forEach((individualPokemon) => {
        if (individualPokemon[filterType] === filterCriteria || (filterType === 'candy' && filterCriteria === '>100' && individualPokemon['candy'] > 100)) {
          filteredPokemonList.push(individualPokemon.number);
        }
      })
    })

    return filteredPokemonList;
  }

  toggleDisallowedPokemonOff = (toggle) => {
    if (!toggle) return;

    this.setState(prevState => {
      let toggled = Object.assign({}, prevState.toggled);
      const allowedPokemonNumbers = [];
      this.getAllowedPokemonFamilies().forEach(pokemonFamily =>
        pokemonFamily.forEach(individualPokemon =>
          allowedPokemonNumbers.push(individualPokemon.number)
        )
      );

      Object.keys(toggled).forEach(pokemonNumber => {
        if (!allowedPokemonNumbers.includes(pokemonNumber)) toggled[pokemonNumber] = false;
      });

      return { toggled };
    });
  }

  // Returns the current generated query string, which can be copied to clipboard.
  // TODO: Generalize the concept of queries which include ranges beyond just 'Compact'
  getCurrentQuery = () => {
    let currentQuery = "";

    // If the user isn't evolving, don't include the translated 'evolve' value in the query
    const translatedEvolve = !this.state.evolving ? '' : `${ Constants.EVOLVE_TRANSLATIONS[this.state.language] }&`;

    // Explicitly set query; needed for 'Compact' which includes ranges (e.g. '110-125')
    if (this.state.selectedPreCreatedQueryCheckbox === 'Compact') {
      currentQuery = `${ translatedEvolve }${ Constants.QUERIES['Compact']['query'] }`;
    } else {
      let selectedNumbers = [];
      const keys = Object.keys(this.state.toggled);
      for (let i in keys) {
        if (this.state.toggled[keys[i]]) {
          selectedNumbers.push(keys[i]);
        }
      };
      currentQuery = `${ translatedEvolve }${ selectedNumbers.join(',') }`;
    }

    return currentQuery;
  }

  // When the user clicks on one of the pre-created query selections, e.g. 'Full Query' or 'Minimal Query'
  handlePreCreatedQueryCheckboxClick = (query) => {
    this.setState({ selectedPreCreatedQueryCheckbox: query })

    // If Compact is selected, we toggle the boxes as if the query were 'Full'
    if (query === 'Compact') {
      query = 'Full';
    }

    let toggled = {};
    const keys = Object.keys(this.state.toggled);
    for (let i in keys) {
      toggled[keys[i]] = (Constants.QUERIES[query]['query'].includes(keys[i])) ? true : false;
    };
    this.setState({ toggled });
  }

  handleIndividualPokemonClick = (pokemonNumber) => {
    this.setState((prevState) => {
      let toggled = Object.assign({}, prevState.toggled);
      toggled[pokemonNumber] = !toggled[pokemonNumber]
      return { toggled, selectedPreCreatedQueryCheckbox: null };
    })
  }

  // selectType: one of ['candy', 'evolution', 'meta', null]
  // selectCriteria: for evolution e.g. 1, 2, 3; for candy eg. 12, 25, 50; for meta e.g. 'nohigher'
  // selectOrDeselect: boolean, whether we're selecting/deselecting
  onSelectDeselectAllClick = (selectType, selectCriteria, selectOrDeselect) => {
    this.setState((prevState) => {
      let toggled = {};
      const keys = Object.keys(prevState.toggled)

      if (selectType === null) {
        for (let i in keys) toggled[keys[i]] = selectOrDeselect;
      } else {
        const filteredPokemonList = this.getFilteredListOfPokemon(selectType, selectCriteria);
        for (let i in keys) toggled[keys[i]] = (filteredPokemonList.includes(keys[i]) ? selectOrDeselect : prevState.toggled[keys[i]]);
      }

      return { toggled, selectedPreCreatedQueryCheckbox: null };
    })
  }

  renderPrecreatedQueryCheckboxes = () => {
    return Object.keys(Constants.QUERIES).map((queryName) =>
      <li key={queryName}>
        <input
          type='checkbox'
          className="PokemonSelectionCheckbox"
          id={queryName}
          value={queryName}
          checked={this.state.selectedPreCreatedQueryCheckbox === queryName}
          onChange={this.handlePreCreatedQueryCheckboxClick.bind(this, queryName)}
        />
        <label className="PreCreatedQueryLabel" htmlFor={queryName}>{Constants.QUERIES[queryName]['label']}</label>
      </li>
    )
  }

  renderPokemonGenerations = () => {
    return this.getAllowedPokemonFamiliesPerGeneration().map((pokemonGeneration) => {
      return (
        <div key={pokemonGeneration.name} className="PokemonGeneration">
          <div className="PokemonGenerationTitle">{pokemonGeneration.name}</div>
          {this.renderPokemonFamiliesPerGeneration(pokemonGeneration.families)}
        </div>
      )
    })
  }

  renderPokemonFamiliesPerGeneration = (pokemonFamiliesPerGeneration) => {
    return pokemonFamiliesPerGeneration.map((pokemonFamily) => {
      const individualPokemonPerFamily = this.renderIndividualPokemonButtonsPerFamily(pokemonFamily)

      return Object.values(individualPokemonPerFamily).some(o => o !== null) ? (
        <div className='PokemonFamilyButtons' key={pokemonFamily[pokemonFamily.length - 1].number}>
          {individualPokemonPerFamily}
        </div>
      ) : null;
    })
  }

  renderIndividualPokemonButtonsPerFamily = (pokemonFamily) => {
    return pokemonFamily.map((individualPokemon) => {
      const selectedStyle = (this.state.toggled[individualPokemon.number] ? 'selected' : 'notSelected');

      return (
        <button
          key={individualPokemon.number}
          className={"PokemonSelectionButton PokemonSelectionButton-" + selectedStyle}
          id={individualPokemon.name}
          value={individualPokemon.number}
          onClick={this.handleIndividualPokemonClick.bind(this, individualPokemon.number)}
        >
          <img src={`${process.env.PUBLIC_URL}/pokemon_icons/${individualPokemon.number}.png`} alt={individualPokemon.name} className='PokemonIcon' />
        </button>
      )
    })
  }

  render() {
    const currentQuery = this.getCurrentQuery();

    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokémon Query Generator</h1>
        </div>
        <div className="Main-body">
          <div className="CurrentQuery">
            {currentQuery}
          </div>
          <CopyToClipboard
            text={currentQuery}
            onCopy={() => this.setState({copied: true})}
          >
            <button className="ClickToCopy">Click to Copy</button>
          </CopyToClipboard>
          <div className="PokemonSelectionContainer">
            <ul className="QueryList">
              <PrecreatedQueryCheckboxes
                selectedPreCreatedQueryCheckbox={this.state.selectedPreCreatedQueryCheckbox}
                onChange={this.handlePreCreatedQueryCheckboxClick}
              />
              <hr />
              <Collapsible
                trigger='Advanced Controls &rsaquo;'
                triggerWhenOpen='Advanced Controls &lsaquo;'
                transitionTime={ 200 }
              >
                <hr />
                <SelectionList // Language Selection
                  optionLabels={Object.keys(Constants.EVOLVE_TRANSLATIONS)}
                  id="languageSelect"
                  label="Language:"
                  selectionClass="LanguageSelect"
                  onChange={(e) => this.setState({ language: e.target.value})}
                />
                <SelectionToggleButton // Evolving text toggle
                  onToggle={(value) => this.setState({ evolving: !value, selectedPreCreatedQueryCheckbox: null }, this.updateCurrentQuery)}
                  value={this.state.evolving}
                  id="evolvingButton"
                  label="Evolving?"
                />
                <SelectionToggleButton // Including baby pokemon toggle
                  onToggle={(value) => this.setState({ includeBabies: !value, selectedPreCreatedQueryCheckbox: null }, this.toggleDisallowedPokemonOff.bind(this, value))}
                  value={this.state.includeBabies}
                  id="includeBabyPokemonButton"
                  label="Include Babies?"
                />
                <SelectionToggleButton // Including pokemon needing evolution items toggle
                  onToggle={(value) => this.setState({ includeEvoItemPokemon: !value, selectedPreCreatedQueryCheckbox: null }, this.toggleDisallowedPokemonOff.bind(this, value))}
                  value={this.state.includeEvoItemPokemon}
                  id="includeEvoItemPokemonButton"
                  label="Include those needing Evo Items?"
                />
                <SelectionToggleButton // Including pokemon needing evolution items toggle
                  onToggle={(value) => this.setState({ includeLegendaries: !value, selectedPreCreatedQueryCheckbox: null }, this.toggleDisallowedPokemonOff.bind(this, value))}
                  value={this.state.includeLegendaries}
                  id="includeLegendaryPokemonButton"
                  label="Include Legendaries?"
                />
        				<SelectionToggleButton // Including pokemon needing evolution items toggle
                  onToggle={(value) => this.setState({ includeNoHigherEvolutions: !value, selectedPreCreatedQueryCheckbox: null }, this.toggleDisallowedPokemonOff.bind(this, value))}
                  value={this.state.includeNoHigherEvolutions}
                  id="includenoHigherEvolutionsPokemonButton"
                  label="Include Pokémon with no Evolutions?"
                />
                <hr />
                <SelectDeselectAllButtons onClick={this.onSelectDeselectAllClick} />
                {this.state.includeBabies &&
                  <SelectDeselectBabyPokemonButtons onClick={this.onSelectDeselectAllClick} />
                }
                {this.state.includeNoHigherEvolutions &&
                  <SelectDeselectNoHigherEvoButtons onClick={this.onSelectDeselectAllClick} />
                }
                {this.state.includeLegendaries &&
                  <SelectDeselectLegendariesButtons onClick={this.onSelectDeselectAllClick} />
                }
                <hr />
                <SelectDeselectEvolutionButtons onClick={this.onSelectDeselectAllClick} />
                <hr />
                <SelectDeselectCandyButtons onClick={this.onSelectDeselectAllClick} />
              </Collapsible>
              <hr />
              {this.renderPokemonGenerations()}
            </ul>
          </div>
          <hr/>
          <div className="Footer">
            <h4>Inspired by <a href="https://www.reddit.com/r/TheSilphRoad/comments/6ztyu5/the_ultimate_mass_evolution_search_query/">this</a> Reddit thread.</h4>
            For comments or suggestions, message me <a href="https://www.reddit.com/user/mikeappell/">on Reddit.</a>
            <br />
            <br />
            Pokémon And All Respective Names are Trademark & © of Nintendo 1996-2018
            Pokémon GO is Trademark & © of Niantic, Inc.
            <br />
            <br />
            This website is not affiliated with Niantic Inc., The Pokemon Company or Nintendo, though I think they're peachy keen.
            <br />
            <br />
            Built using <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>. Code can be found <a href="https://github.com/mikeappell/pokemon_evolve_query_react">here</a>.
          </div>
        </div>
      </div>
    );
  }
}

// class PrecreatedQueryCheckboxes extends Component {
//   static PropTypes = {
//     selectedPreCreatedQueryCheckbox: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   }
function PrecreatedQueryCheckboxes({ selectedPreCreatedQueryCheckbox, onChange }) {
  return Object.keys(Constants.QUERIES).map((queryName) =>
    <li key={queryName}>
      <input
        type='checkbox'
        className="PokemonSelectionCheckbox"
        id={queryName}
        value={queryName}
        checked={selectedPreCreatedQueryCheckbox === queryName}
        onChange={onChange.bind(this, queryName)}
      />
      <label className="PreCreatedQueryLabel" htmlFor={queryName}>{Constants.QUERIES[queryName]['label']}</label>
    </li>
  )
}

// class SelectionToggleButton extends Component {
//   static propTypes = {
//     onToggle: PropTypes.func.isRequired,
//     value: PropTypes.bool.isRequired,
//     colors: PropTypes.object,
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     labelClass: PropTypes.string,
//     blurb: PropTypes.string,
//   }

//   static defaultProps = {
//     colors: { active: { base: 'rgb(109,127,145)' } },
//     blurb: null,
//     labelClass: 'ToggleContainerLabel',
//   }
function SelectionToggleButton({ onToggle,
                                 value,
                                 id,
                                 label,
                                 colors = { active: { base: 'rgb(109,127,145)' } },
                                 labelClass = 'ToggleContainerLabel',
                                 blurb = null }) {
  const conditionalBlurb = blurb
    ? (
      <div className="SelectionLabelBlurb">
        {blurb}
      </div>
    ) : null

  return (
    <div>
      {conditionalBlurb}
      <div className="ToggleContainer">
        <label className={labelClass} htmlFor={id}>{label}</label>
        <ToggleButton
          colors={colors}
          inactiveLabel='No'
          activeLabel='Yes'
          value={value}
          id={id}
          onToggle={onToggle}
        />
      </div>
    </div>
  )
}

// class SelectionList extends Component {
//   static PropTypes = {
//     optionLabels: PropTypes.array.isRequired,
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     selectionClass: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   }
function SelectionList({ optionLabels, id, label, selectionClass, onChange }) {
  const options = optionLabels.map((key) =>
    <option key={key} value={key}>{key}</option>
  )

  return (
    <div className={"ToggleContainer " + selectionClass}>
      <label className={selectionClass + 'Label'} htmlFor={id}>{label}</label>
      <select
        className={selectionClass + 'Select'}
        id={id}
        onChange={onChange}
      >
        {options}
      </select>
    </div>
  )
}

// class SelectDeselectEvolutionButtons extends Component {
//   static PropTypes = {
//     onClick: PropTypes.func.isRequired,
//   }
function SelectDeselectEvolutionButtons({ onClick }) {
  const buttonsInfo = [
    { label: 'First Evolutions:', value: 1 },
    { label: 'Second Evolutions:', value: 2 },
    { label: 'Third Evolutions:', value: 3 },
  ]

  return (
    <SelectDeselectButtons
      buttonsInfo={buttonsInfo}
      selectionType="evolution"
      onClick={onClick}
   />
  )
}

// class SelectDeselectAllButtons extends Component {
//   static PropTypes = {
//     onClick: PropTypes.func.isRequired,
//   }
function SelectDeselectAllButtons({ onClick }) {
  const buttonsInfo = [{ label: 'All Pokémon', value: null }];

  return (
    <SelectDeselectButtons
      buttonsInfo={buttonsInfo}
      onClick={onClick} />
  )
}

// class SelectDeselectCandyButtons extends Component {
//   static PropTypes = {
//     onClick: PropTypes.func.isRequired,
//   }
function SelectDeselectCandyButtons({ onClick }) {
  const buttonsInfo = [
    { label: '12 Candy Evo', value: 12 },
    { label: '25 Candy Evo', value: 25 },
    { label: '50 Candy Evos', value: 50 },
    { label: '100 Candy Evo', value: 100 },
    { label: '>100 Candy Evo', value: '>100' },
  ]

  return (
    <SelectDeselectButtons
      buttonsInfo={buttonsInfo}
      selectionType="candy"
      onClick={onClick}
   />
  )
}

function SelectDeselectBabyPokemonButtons({ onClick }) {
  return (
    <SelectDeselectMetaButtons
      label="Baby Pokémon"
      value="baby"
      onClick={onClick}
   />
  )
}

function SelectDeselectNoHigherEvoButtons({ onClick }) {
  return (
    <SelectDeselectMetaButtons
      label="No Higher Evo"
      value="nohigher"
      onClick={onClick}
   />
  )
}

function SelectDeselectLegendariesButtons({ onClick }) {
  return (
    <SelectDeselectMetaButtons
      label="Legendaries"
      value="legend"
      onClick={onClick}
   />
  )
}

function SelectDeselectMetaButtons({ onClick, label, value }) {
  const buttonsInfo = [
    { label, value },
  ]

  return (
    <SelectDeselectButtons
      buttonsInfo={buttonsInfo}
      selectionType="meta"
      onClick={onClick}
   />
  )
}

// class SelectDeselectButtons extends Component {
//   static PropTypes = {
//     buttonsInfo: PropTypes.array.isRequired, // [ { label: 'First Evolutions:', value: 1 }, { ... } ]
//     onClick: PropTypes.func.isRequired,
//     blurb: PropTypes.string,
//     selectionType: PropTypes.string,
//   }

//   static defaultProps = {
//     blurb: null,
//     selectionType: null,
//   }
function SelectDeselectButtons({ buttonsInfo, onClick, blurb = null, selectionType = null}) {
  const conditionalBlurb = blurb
    ? (
      <div className="SelectionLabelBlurb">
        {blurb}
      </div>
    ) : null

  const buttons = buttonsInfo.map((button) => (
    <tr key={button.label} >
      <td className="SelectionHeader">{button.label}:</td>
      <td className="SelectionButtonCell">
        <button className="SelectionButton" onClick={onClick.bind(this, selectionType, button.value, true)}>
          Select All
        </button>
      </td>
      <td className="SelectionButtonCell">
        <button className="SelectionButton" onClick={onClick.bind(this, selectionType, button.value, false)}>
          De-select All
        </button>
      </td>
    </tr>
  ))

  return (
    <div className="SelectDeselectButtons">
      {conditionalBlurb}
      <table>
        <tbody>
          {buttons}
        </tbody>
      </table>
    </div>
  )
}

export default App;