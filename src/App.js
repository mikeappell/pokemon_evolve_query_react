import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

export const Queries = {
  "Compact Full Query (doesn't allow modification)" : ['1','4','7','10','13','16','19-23','27','29','32','37','41','43','46-60','63','66','69','72','74','77-92','95-116','118-147','152','155','158','161-179','183','187','191-246','353','355'],
  'Full Query': ['1','4','7','10','13','16','19','21','23','27','29','32','37','41','43','46','48','68','50','52','54','56','58','60','63','66','69','72','74','77','79','81','84','86','88','90','92','96','98','100','102','104','109','111','113','116','118','120','133','138','140','147','152','155','158','161','163','165','167','170','172','173','174','175','177','179','183','187','194','204','209','216','218','220','223','228','231','238','239','240','246','353','355'],
  'Minimal Query': ['10','13','16','19','21','161','163','165','167','177'],
  'Water-Specific Query': ['10','13','16','19','21','60','72','86','90','116','161','163','165','167','177','183','194','223'],
  'Forest-Specfic Query': ['10','13','16','19','21','29','32','43','69','161','163','165','167','177','191','204'],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: null,
      value: null,
      copied: false,
    };
  }

  componentDidMount = () => {
    this.handlePreCreatedCheckboxClick(Object.keys(Queries)[0]);
  }

  generateQuery = (query = null) => {
    if (query) { return `evolve&${ Queries[query].join(',') }`; }

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    let selectedNumbers = [];
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      const cb = checkboxes[i];
      if (cb.checked === true) {
        selectedNumbers.push(cb.value);
      }
    };

    return `evolve&${ selectedNumbers.join(',') }`;
  }

  handlePreCreatedCheckboxClick = (query) => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      let cb = checkboxes[i];
      if(cb.id !== query) {
        cb.checked = false;
      }
    };

    // If the user clicked the compact full query, we disable all pokemon checkboxes
    // Otherwise, we enable them and check/uncheck them as appropriate for the query
    if (query === "Compact Full Query (doesn't allow modification)") {
      this.disableCheckboxes();
    } else {
      this.enableCheckboxes();
      for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
        let cb = checkboxes[i];
        if (Queries[query].includes(cb.value)) {
          cb.checked = true;
        } else {
          cb.checked = false;
        }
      };
    }

    this.setState({
      currentQuery: this.generateQuery(query),
    })
  }

  handleManualCheckboxClick = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for(let i = 0; i < Object.keys(Queries).length; i++) {
      checkboxes[i].checked = false;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  enableCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].disabled = false;
    }

    // const buttons = document.querySelectorAll("button[data-select-button='true']")
    // for (let i = 0; i < buttons.length; i++) {
    //   buttons[i].disabled = false;
    // }
  }

  disableCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = Object.keys(Queries).length; i < checkboxes.length; i++) {
      checkboxes[i].disabled = true;
    }

    // const buttons = document.querySelectorAll("button[data-select-button='true']")
    // for (let i = 0; i < buttons.length; i++) {
    //   buttons[i].disabled = true;
    // }
  }

  onSelectAllClick = (evolution) => {
    this.enableCheckboxes();
    const preCreatedCheckboxes = document.querySelectorAll('input.SelectionCheckbox-preCreated');
    const evolutionCheckboxes = document.querySelectorAll(`input.SelectionCheckbox-${evolution}`);
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      preCreatedCheckboxes[i].checked = false;
    }

    for (let i = 0; i < evolutionCheckboxes.length; i++) {
      evolutionCheckboxes[i].checked = true;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  onDeselectAllClick = (evolution) => {
    this.enableCheckboxes();
    const preCreatedCheckboxes = document.querySelectorAll('input.SelectionCheckbox-preCreated');
    const evolutionCheckboxes = document.querySelectorAll(`input.SelectionCheckbox-${evolution}`);
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      preCreatedCheckboxes[i].checked = false;
    }

    for (let i = 0; i < evolutionCheckboxes.length; i++) {
      evolutionCheckboxes[i].checked = false;
    };

    this.setState({
      currentQuery: this.generateQuery(),
    })
  }

  renderPokemonSelection = () => {
    return (
      <ul className="QueryList">
        {this.renderPrecreatedQueryCheckboxes()}
        <hr/>
        <div className="SelectionButtons">
          <div className="SelectionLabelBlurb">
            * Can be used to find just-evolved Pokemon to transfer post-evolution
          </div>
          <div>
            <span className="SelectionLabel">First Evolutions:</span>
            <button
              id="selectAllFirstEvo"
              data-select-button
              onClick={this.onSelectAllClick.bind(this, 1)}
            >
              Select All
            </button>
            <button
              id="deselectAllSecondEvo"
              data-select-button
              onClick={this.onDeselectAllClick.bind(this, 1)}
            >
              De-select All
            </button>
          </div>
          <div>
            <span className="SelectionLabel">Second Evolutions: *</span>
            <button
              id="selectAllSecondEvo"
              data-select-button
              onClick={this.onSelectAllClick.bind(this, 2)}
            >
              Select All
            </button>
            <button
              id="deselectAllSecondEvo"
              data-select-button
              onClick={this.onDeselectAllClick.bind(this, 2)}
            >
              De-select All
            </button>
          </div>
        </div>
        {this.renderIndividualPokemonCheckboxes()}
      </ul>
    )
  }

  renderPrecreatedQueryCheckboxes = () => {
    return Object.keys(Queries).map((queryName) => {
      return (
        <li key={queryName}>
          <input
            type='checkbox'
            className="SelectionCheckbox SelectionCheckbox-preCreated"
            id={queryName}
            value={queryName}
            defaultChecked={queryName === Object.keys(Queries)[0]}
            onChange={this.handlePreCreatedCheckboxClick.bind(this, queryName)}
          />
          <label htmlFor={queryName}>{queryName}</label>
        </li>
      )
    })
  }

  renderIndividualPokemonCheckboxes = () => {
    return Object.keys(PokemonPairs).map((pokemonName) => {
      return (
        <li key={PokemonPairs[pokemonName]}>
          <input
            type='checkbox'
            className={"SelectionCheckbox SelectionCheckbox-" + PokemonPairs[pokemonName][1]}
            id={pokemonName}
            value={PokemonPairs[pokemonName][0]}
            onChange={this.handleManualCheckboxClick}
          />
          <label htmlFor={pokemonName}>{pokemonName}</label>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokemon Mass-Evolution Query Generator</h1>
        </div>
        <div className="Main-body">
          <h4>Inspired by <a href="https://www.reddit.com/r/TheSilphRoad/comments/6ztyu5/the_ultimate_mass_evolution_search_query/">this</a> Reddit thread.</h4>
          <div className="CurrentQuery">
            {this.state.currentQuery}
          </div>
          <CopyToClipboard
            text={this.state.currentQuery}
            onCopy={() => this.setState({copied: true})}
          >
            <button>Click to Copy</button>
          </CopyToClipboard>
          <div className="PokemonSelection">
            {this.renderPokemonSelection()}
          </div>
          <div>
            <h5>
              For comments or suggestion, message me <a href="https://www.reddit.com/user/mikeappell/">here.</a>
              <br/>
              <br/>
              Built using <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>. Code can be found <a href="https://github.com/mikeappell/pokemon_evolve_query_react">here</a>.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
export const PokemonPairs = {
  Bulbasaur: ['1', 1],
  Ivysaur: ['2', 2],
  Charmander : ['4', 1],
  Charmeleon: ['5', 2],
  Squirtle: ['7', 1],
  Wartortle: ['8', 2],
  Caterpie: ['10', 1],
  Metapod: ['11', 2],
  Weedle: ['13', 1],
  Kakuna: ['14', 2],
  Pidgey: ['16', 1],
  Pidgeotto: ['17', 2],
  Rattata: ['19', 1],
  Spearow: ['21', 1],
  Ekans: ['23', 1],
  Pikachu: ['25', 1],
  Sandshrew: ['27', 1],
  'Nidoran♀': ['29', 1],
  Nidorina: ['30', 2],
  'Nidoran♂': ['32', 1],
  Nidorino: ['33', 2],
  Clefairy: ['35', 1],
  Vulpix: ['37', 1],
  Jigglypuff: ['39', 1],
  Zubat: ['41', 1],
  Golbat: ['42', 2],
  Oddish: ['43', 1],
  Gloom: ['44', 2],
  Paras: ['46', 1],
  Parasect: ['47', 2],
  Venonat: ['48', 1],
  Diglett: ['50', 1],
  Meowth: ['52', 1],
  Psyduck: ['54', 1],
  Mankey: ['56', 1],
  Growlithe: ['58', 1],
  Poliwag: ['60', 1],
  Poliwhirl: ['61', 2],
  Abra: ['63', 1],
  Kadabra: ['64', 2],
  Alakazam: ['65', 2],
  Machop: ['66', 1],
  Machoke: ['67', 2],
  Bellsprout: ['69', 1],
  Weepinbell: ['70', 2],
  Tentacool: ['72', 1],
  Geodude: ['74', 1],
  Graveler: ['75', 2],
  Ponyta: ['77', 1],
  Slowpoke: ['79', 1],
  Magnemite: ['81', 1],
  Doduo: ['84', 1],
  Seel: ['86', 1],
  Grimer: ['88', 1],
  Shellder: ['90', 1],
  Gastly: ['92', 1],
  Haunter: ['93', 2],
  Drowzee: ['96', 1],
  Krabby: ['98', 1],
  Voltorb: ['100', 1],
  Exeggcute: ['102', 1],
  Cubone: ['104', 1],
  Koffing: ['109', 1],
  Rhyhorn: ['111', 1],
  Chansey: ['113', 1],
  Horsea: ['116', 1],
  Goldeen: ['118', 1],
  Staryu: ['120', 1],
  Eevee: ['133', 1],
  Omanyte: ['138', 1],
  Kabuto: ['140', 1],
  Dratini: ['147', 1],
  Chikorita: ['152', 1],
  Bayleef: ['153', 2],
  Cyndaquil: ['155', 1],
  Quilava: ['156', 2],
  Totodile: ['158', 1],
  Croconaw: ['159', 2],
  Sentret: ['161', 1],
  Hoothoot: ['163', 1],
  Ledyba: ['165', 1],
  Spinarak: ['167', 1],
  Chinchou: ['170', 1],
  Pichu: ['172', 1],
  Cleffa: ['173', 1],
  Igglybuff: ['174', 1],
  Togepi: ['175', 1],
  Natu: ['177', 1],
  Mareep: ['179', 1],
  Flaaffy: ['180', 2],
  Marill: ['183', 1],
  Skiploom: ['188', 2],
  Hoppip: ['187', 1],
  Wooper: ['194', 1],
  Pineco: ['204', 1],
  Snubbull: ['209', 1],
  Teddiursa: ['216', 1],
  Slugma: ['218', 1],
  Swinub: ['220', 1],
  Remoraid: ['223', 1],
  Houndour: ['228', 1],
  Phanpy: ['231', 1],
  Smoochum: ['238', 1],
  Elekid: ['239', 1],
  Magby: ['240', 1],
  Larvitar: ['246', 1],
  Pupitar: ['247', 2],
  Shuppet: ['353', 1],
  Banette: ['354', 2],
  Duskull: ['355', 1],
  Dusclops: ['356', 2],
};