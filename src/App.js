import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: `${ EvolveTranslations['English'] }&${ Queries['Compact']['query]'] }`,
      value: null,
      copied: false,
    };
  }

  // TODO: Generalize the concept of queries which include ranges beyond just 'Compact'
  setCurrentQuery = () => {
    const compactQuery = document.querySelector('input#Compact');
    const translatedEvolve = document.querySelector('select#languageSelect').value;
    let currentQuery = "";

    // Explicitly set query; needed for 'Compact' which includes ranges (e.g. '110-125')
    if (compactQuery.checked) {
      currentQuery = `${ translatedEvolve }&${ Queries['Compact']['query'] }`;
    } else {
      const pokemonCheckboxes = document.querySelectorAll("input.SelectionCheckbox-pokemon");
      let selectedNumbers = [];
      for (let i = 0; i < pokemonCheckboxes.length; i++) {
        const cb = pokemonCheckboxes[i];
        if (cb.checked === true) {
          selectedNumbers.push(cb.value);
        }
      };
      currentQuery = `${translatedEvolve}&${ selectedNumbers.join(',') }`;
    }

    this.setState({ currentQuery });
  }

  handlePreCreatedCheckboxClick = (query) => {
    const preCreatedCheckboxes = document.querySelectorAll("input.SelectionCheckbox-preCreated");
    for (let i = 0; i < preCreatedCheckboxes.length; i++) {
      // Uncheck all other checkboxes
      let cb = preCreatedCheckboxes[i];
      if(cb.id !== query) {
        cb.checked = false;
      }
    };

    // If the user clicked the compact full query, we disable all pokemon checkboxes
    // Otherwise, we enable them and check/uncheck them as contained in the query
    if (query === 'Compact') {
      this.disableCheckboxes();
    } else {
      this.enableCheckboxes();
      const pokemonCheckboxes = document.querySelectorAll("input.SelectionCheckbox-pokemon");
      for (let i = 0; i < pokemonCheckboxes.length; i++) {
        let cb = pokemonCheckboxes[i];
        if (Queries[query]['query'].includes(cb.value)) {
          cb.checked = true;
        } else {
          cb.checked = false;
        }
      };
    }

    this.setCurrentQuery(query);
  }

  handleIndividualCheckboxClick = () => {
    const pokemonCheckboxes = document.querySelectorAll("input.SelectionCheckbox-preCreated");
    for(let i = 0; i < pokemonCheckboxes.length; i++) {
      pokemonCheckboxes[i].checked = false;
    };

    this.setCurrentQuery();
  }

  enableCheckboxes = () => {
    const pokemonCheckboxes = document.querySelectorAll("input.SelectionCheckbox-pokemon");
    for (let i = 0; i < pokemonCheckboxes.length; i++) {
      pokemonCheckboxes[i].disabled = false;
    }
  }

  disableCheckboxes = () => {
    const pokemonCheckboxes = document.querySelectorAll("input.SelectionCheckbox-pokemon");
    for (let i = 0; i < pokemonCheckboxes.length; i++) {
      pokemonCheckboxes[i].disabled = true;
    }
  }

  onSelectAllClick = (evolution) => {
    if (document.querySelector('input#Compact').checked) this.enableCheckboxes();

    const preCreatedCheckboxes = document.querySelectorAll('input.SelectionCheckbox-preCreated');
    const evolutionCheckboxes = document.querySelectorAll(`input.SelectionCheckbox-${evolution}`);
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      preCreatedCheckboxes[i].checked = false;
    }

    for (let i = 0; i < evolutionCheckboxes.length; i++) {
      evolutionCheckboxes[i].checked = true;
    };

    this.setCurrentQuery();
  }

  onDeselectAllClick = (evolution) => {
    if (document.querySelector('input#Compact').checked) this.enableCheckboxes();

    const preCreatedCheckboxes = document.querySelectorAll('input.SelectionCheckbox-preCreated');
    const evolutionCheckboxes = document.querySelectorAll(`input.SelectionCheckbox-${evolution}`);
    for (let i = 0; i < Object.keys(Queries).length; i++) {
      preCreatedCheckboxes[i].checked = false;
    }

    for (let i = 0; i < evolutionCheckboxes.length; i++) {
      evolutionCheckboxes[i].checked = false;
    };

    this.setCurrentQuery();
  }

  renderLanguageSelection = () =>{
    const options = Object.keys(EvolveTranslations).map((language) => {
      return (
        <option key={language} value={EvolveTranslations[language]}>{language}</option>
      )}
    )

    return (
      <div className="LanguageSelect">
        <label className="LanguageSelectLabel" htmlFor="languageSelect">Language:</label>
        <select
          className="LanguageSelectSelect"
          id="languageSelect"
          onChange={this.setCurrentQuery}
        >
          {options}
        </select>
      </div>
    )
  }

  renderSelectDeselectAllButtons = () => {
    return (
      <div className="SelectionButtons">
        <div className="SelectionLabelBlurb">
          * Higher evolutions can be used to find just-evolved Pokemon to transfer post-evolution
        </div>
        <div>
          <span className="SelectionLabel">First Evolutions:</span>
          <button id="selectAllFirstEvo" data-select-button onClick={this.onSelectAllClick.bind(this, 1)}>
            Select All
          </button>
          <button id="deselectAllSecondEvo" data-select-button onClick={this.onDeselectAllClick.bind(this, 1)}>
            De-select All
          </button>
        </div>
        <div>
          <span className="SelectionLabel">Second Evolutions:</span>
          <button id="selectAllSecondEvo" data-select-button onClick={this.onSelectAllClick.bind(this, 2)}>
            Select All
          </button>
          <button id="deselectAllSecondEvo" data-select-button onClick={this.onDeselectAllClick.bind(this, 2)}>
            De-select All
          </button>
        </div>
        <div>
          <span className="SelectionLabel">Third Evolutions:</span>
          <button id="selectAllThirdEvo" data-select-button onClick={this.onSelectAllClick.bind(this, 3)}>
            Select All
          </button>
          <button id="deselectAllThirdEvo" data-select-button onClick={this.onDeselectAllClick.bind(this, 3)}>
            De-select All
          </button>
        </div>
      </div>
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
            defaultChecked={queryName === 'Compact'}
            onChange={this.handlePreCreatedCheckboxClick.bind(this, queryName)}
          />
          <label htmlFor={queryName}>{Queries[queryName]['label']}</label>
        </li>
      )
    })
  }

  renderIndividualPokemonCheckboxes = () => {
    const listOfMetaTagsToSkip = ['nohigher', 'legend', 'special'];

    // We skip rendering that pokemon's checkbox if their metadata is on our skiplist
    const filteredPokemon = Object.keys(PokemonPairs).filter((pokemonName) => !listOfMetaTagsToSkip.includes(PokemonPairs[pokemonName]['meta']) )

    return filteredPokemon.map((pokemonName) => {
      return (
        <li key={PokemonPairs[pokemonName]['number']}>
          <input
            type='checkbox'
            className={"SelectionCheckbox SelectionCheckbox-pokemon SelectionCheckbox-" + PokemonPairs[pokemonName]['evolution']}
            id={pokemonName}
            value={PokemonPairs[pokemonName]['number']}
            onChange={this.handleIndividualCheckboxClick}
          />
          <label htmlFor={pokemonName}>{pokemonName}</label>
        </li>
      )
    })
  }

  renderPokemonSelection = () => {
    return (
      <ul className="QueryList">
        {this.renderLanguageSelection()}
        {this.renderPrecreatedQueryCheckboxes()}
        <hr/>
        {this.renderSelectDeselectAllButtons()}
        {this.renderIndividualPokemonCheckboxes()}
      </ul>
    )
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
          <hr/>
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

export const Queries = {
  Compact: { label: "Compact Full Query (doesn't allow modification)", query: '1,4,7,10,13,16,19-23,27,29,32,37,41,43,46-60,63,66,69,72,74,77-92,95-116,118-147,152,155,158,161-179,183,187,191-246,353,355' },
  Full: { label: 'Full Query', query: ['1','4','7','10','13','16','19','21','23','27','29','32','37','41','43','46','48','50','52','54','56','58','60','63','66','69','72','74','77','79','81','84','86','88','90','92','96','98','100','102','104','109','111','113','116','118','120','133','138','140','147','152','155','158','161','163','165','167','170','172','173','174','175','177','179','183','187','194','204','209','216','218','220','223','228','231','238','239','240','246','353','355'] },
  Minimal: { label: 'Minimal Query', query: ['10','13','16','19','21','161','163','165','167','177'] },
  Water: { label: 'Water-Specific Query', query: ['10','13','16','19','21','60','72','86','90','116','161','163','165','167','177','183','194','223'] },
  Forest: { label: 'Forest-Specfic Query', query: ['10','13','16','19','21','29','32','43','69','161','163','165','167','177','191','204'] },
};

export const EvolveTranslations = {
  English: 'evolve',
  Spanish: 'evolucionar',
  German: 'entwickeln',
  Italian: 'evolvere',
  French: 'évoluer',
  Dutch: 'evolueren',
  Greek: 'αναπτύσσω',
  Portuguese: 'evoluir',
  Japanese: '進化する',
  Korean: '진화하다',
}

// Legend for metadata:
// * 'needevo' - Requires an evolution item
// * 'isevo' - Product of an evolution item
// * 'baby' - Baby pokemon
// * 'nohigher' - No higher evolutions available (currently)
// * 'legend' - Legendary pokemon
// * 'special' - Special for some other reason

export const PokemonPairs = {
  Bulbasaur: { number: '1', evolution: 1 },
  Ivysaur: { number: '2', evolution: 2 },
  Venusaur: { number: '3', evolution: 3 },
  Charmander: { number: '4', evolution: 1 },
  Charmeleon: { number: '5', evolution: 2 },
  Charizard: { number: '6', evolution: 3 },
  Squirtle: { number: '7', evolution: 1 },
  Wartortle: { number: '8', evolution: 2 },
  Blastoise: { number: '9', evolution: 3 },
  Caterpie: { number: '10', evolution: 1 },
  Metapod: { number: '11', evolution: 2 },
  Butterfree: { number: '12', evolution: 3 },
  Weedle: { number: '13', evolution: 1 },
  Kakuna: { number: '14', evolution: 2 },
  Beedrill: { number: '15', evolution: 3 },
  Pidgey: { number: '16', evolution: 1 },
  Pidgeotto: { number: '17', evolution: 2 },
  Pidgeot: { number: '18', evolution: 3 },
  Rattata: { number: '19', evolution: 1 },
  Raticate: { number: '20', evolution: 2 },
  Spearow: { number: '21', evolution: 1 },
  Fearow: { number: '22', evolution: 2 },
  Ekans: { number: '23', evolution: 1 },
  Arbok: { number: '24', evolution: 2 },
  Pichu: { number: '172', evolution: 1, meta: 'baby' },
  Pikachu: { number: '25', evolution: 2 },
  Raichu: { number: '26', evolution: 3 },
  Sandshrew: { number: '27', evolution: 1 },
  Sandslash: { number: '28', evolution: 2 },
  'Nidoran♀': { number: '29', evolution: 1 },
  Nidorina: { number: '30', evolution: 2 },
  Nidoqueen: { number: '31', evolution: 3 },
  'Nidoran♂': { number: '32', evolution: 1 },
  Nidorino: { number: '33', evolution: 2 },
  Nidoking: { number: '34', evolution: 3 },
  Cleffa: { number: '173', evolution: 1, meta: 'baby' },
  Clefairy: { number: '35', evolution: 2 },
  Clefable: { number: '36', evolution: 3 },
  Vulpix: { number: '37', evolution: 1 },
  Ninetales: { number: '38', evolution: 2 },
  Igglybuff: { number: '174', evolution: 1, meta: 'baby' },
  Jigglypuff: { number: '39', evolution: 2 },
  Wigglytuff: { number: '40', evolution: 3 },
  Zubat: { number: '41', evolution: 1 },
  Golbat: { number: '42', evolution: 2 },
  Crobat: { number: '169', evolution: 3 },
  Oddish: { number: '43', evolution: 1 },
  Gloom: { number: '44', evolution: 2 },
  Vileplume: { number: '45', evolution: 3 },
  Paras: { number: '46', evolution: 1 },
  Parasect: { number: '47', evolution: 2 },
  Venonat: { number: '48', evolution: 1 },
  Venomoth: { number: '49', evolution: 2 },
  Diglett: { number: '50', evolution: 1 },
  Dugtrio: { number: '51', evolution: 2 },
  Meowth: { number: '52', evolution: 1 },
  Persian: { number: '53', evolution: 2 },
  Psyduck: { number: '54', evolution: 1 },
  Golduck: { number: '55', evolution: 2 },
  Mankey: { number: '56', evolution: 1 },
  Primeape: { number: '57', evolution: 2 },
  Growlithe: { number: '58', evolution: 1 },
  Arcanine: { number: '59', evolution: 2 },
  Poliwag: { number: '60', evolution: 1 },
  Poliwhirl: { number: '61', evolution: 2 },
  Poliwrath: { number: '62', evolution: 3 },
  Politoed: { number: '186', evolution: 3, meta: 'isevo' },
  Abra: { number: '63', evolution: 1 },
  Kadabra: { number: '64', evolution: 2 },
  Alakazam: { number: '65', evolution: 3 },
  Machop: { number: '66', evolution: 1 },
  Machoke: { number: '67', evolution: 2 },
  Machamp: { number: '68', evolution: 3 },
  Bellsprout: { number: '69', evolution: 1 },
  Weepinbell: { number: '70', evolution: 2 },
  Victreebel: { number: '71', evolution: 3 },
  Bellossom: { number: '182', evolution: 3, meta: 'isevo' },
  Tentacool: { number: '72', evolution: 1 },
  Tentacruel: { number: '73', evolution: 2 },
  Geodude: { number: '74', evolution: 1 },
  Graveler: { number: '75', evolution: 2 },
  Golem: { number: '76', evolution: 3 },
  Ponyta: { number: '77', evolution: 1 },
  Rapidash: { number: '78', evolution: 2 },
  Slowpoke: { number: '79', evolution: 1 },
  Slowbro: { number: '80', evolution: 2 },
  Slowking: { number: '199', evolution: 2, meta: 'isevo' },
  Magnemite: { number: '81', evolution: 1 },
  Magneton: { number: '82', evolution: 2 },
  "Farfetch'd": { number: '83', evolution: 1, meta: 'nohigher' },
  Doduo: { number: '84', evolution: 1 },
  Dodrio: { number: '85', evolution: 2 },
  Seel: { number: '86', evolution: 1 },
  Dewgong: { number: '87', evolution: 2 },
  Grimer: { number: '88', evolution: 1 },
  Muk: { number: '89', evolution: 2 },
  Shellder: { number: '90', evolution: 1 },
  Cloyster: { number: '91', evolution: 2 },
  Gastly: { number: '92', evolution: 1 },
  Haunter: { number: '93', evolution: 2 },
  Gengar: { number: '94', evolution: 3 },
  Onix: { number: '95', evolution: 1, meta: 'needevo' },
  Steelix: { number: '208', evolution: 2, meta: 'isevo' },
  Drowzee: { number: '96', evolution: 1 },
  Hypno: { number: '97', evolution: 2 },
  Krabby: { number: '98', evolution: 1 },
  Kingler: { number: '99', evolution: 2 },
  Voltorb: { number: '100', evolution: 1 },
  Electrode: { number: '101', evolution: 2 },
  Exeggcute: { number: '102', evolution: 1 },
  Exeggutor: { number: '103', evolution: 2 },
  Cubone: { number: '104', evolution: 1 },
  Marowak: { number: '105', evolution: 2 },
  Hitmonlee: { number: '106', evolution: 2, meta: 'special' },
  Hitmonchan: { number: '107', evolution: 2, meta: 'special' },
  Lickitung: { number: '108', evolution: 1, meta: 'nohigher' },
  Koffing: { number: '109', evolution: 1 },
  Weezing: { number: '110', evolution: 2 },
  Rhyhorn: { number: '111', evolution: 1 },
  Rhydon: { number: '112', evolution: 2 },
  Chansey: { number: '113', evolution: 1 },
  Blissey: { number: '242', evolution: 2 },
  Tangela: { number: '114', evolution: 1, meta: 'nohigher' },
  Kangaskhan: { number: '115', evolution: 1, meta: 'nohigher' },
  Horsea: { number: '116', evolution: 1 },
  Seadra: { number: '117', evolution: 2, meta: 'needevo' },
  Kingdra: { number: '230', evolution: 3, meta: 'isevo' },
  Goldeen: { number: '118', evolution: 1 },
  Seaking: { number: '119', evolution: 2 },
  Staryu: { number: '120', evolution: 1 },
  Starmie: { number: '121', evolution: 2 },
  'Mr. Mime': { number: '122', evolution: 1, meta: 'nohigher' },
  Scyther: { number: '123', evolution: 1, meta: 'needevo' },
  Scizor: { number: '212', evolution: 2, meta: 'isevo' },
  Smoochum: { number: '238', evolution: 1, meta: 'baby' },
  Jynx: { number: '124', evolution: 2 },
  Elekid: { number: '239', evolution: 1, meta: 'baby' },
  Electabuzz: { number: '125', evolution: 2 },
  Magby: { number: '240', evolution: 1, meta: 'baby' },
  Magmar: { number: '126', evolution: 2 },
  Pinsir: { number: '127', evolution: 1, meta: 'nohigher' },
  Tauros: { number: '128', evolution: 1, meta: 'nohigher' },
  Magikarp: { number: '129', evolution: 1, meta: 'special' },
  Gyarados: { number: '130', evolution: 2, meta: 'special' },
  Lapras: { number: '131', evolution: 1, meta: 'nohigher' },
  Ditto: { number: '132', evolution: 1, meta: 'nohigher' },
  Eevee: { number: '133', evolution: 1, meta: 'special' },
  Vaporeon: { number: '134', evolution: 2, meta: 'special' },
  Jolteon: { number: '135', evolution: 2, meta: 'special' },
  Flareon: { number: '136', evolution: 2, meta: 'special' },
  Espeon: { number: '196', evolution: 2, meta: 'special' },
  Umbreon: { number: '197', evolution: 2, meta: 'special' },
  Porygon: { number: '137', evolution: 1, meta: 'needevo' },
  Porygon2: { number: '233', evolution: 2, meta: 'isevo' },
  Omanyte: { number: '138', evolution: 1 },
  Omastar: { number: '139', evolution: 2 },
  Kabuto: { number: '140', evolution: 1 },
  Kabutops: { number: '141', evolution: 2 },
  Aerodactyl: { number: '142', evolution: 1, meta: 'nohigher' },
  Snorlax: { number: '143', evolution: 1, meta: 'nohigher' },
  Articuno: { number: '144', evolution: 1, meta: 'legend' },
  Zapdos: { number: '145', evolution: 1, meta: 'legend' },
  Moltres: { number: '146', evolution: 1, meta: 'legend' },
  Dratini: { number: '147', evolution: 1 },
  Dragonair: { number: '148', evolution: 2 },
  Dragonite: { number: '149', evolution: 3 },
  Mewtwo: { number: '150', evolution: 1, meta: 'legend' },
  Mew: { number: '151', evolution: 1, meta: 'legend' },
  Chikorita: { number: '152', evolution: 1 },
  Bayleef: { number: '153', evolution: 2 },
  Meganium: { number: '154', evolution: 3 },
  Cyndaquil: { number: '155', evolution: 1 },
  Quilava: { number: '156', evolution: 2 },
  Typhlosion: { number: '157', evolution: 3 },
  Totodile: { number: '158', evolution: 1 },
  Croconaw: { number: '159', evolution: 2 },
  Feraligatr: { number: '160', evolution: 3 },
  Sentret: { number: '161', evolution: 1 },
  Furret: { number: '162', evolution: 2 },
  Hoothoot: { number: '163', evolution: 1 },
  Noctowl: { number: '164', evolution: 2 },
  Ledyba: { number: '165', evolution: 1 },
  Ledian: { number: '166', evolution: 2 },
  Spinarak: { number: '167', evolution: 1 },
  Ariados: { number: '168', evolution: 2 },
  Chinchou: { number: '170', evolution: 1 },
  Lanturn: { number: '171', evolution: 2 },
  Togepi: { number: '175', evolution: 1, meta: 'baby' },
  Togetic: { number: '176', evolution: 2 },
  Natu: { number: '177', evolution: 1 },
  Xatu: { number: '178', evolution: 2 },
  Mareep: { number: '179', evolution: 1 },
  Flaaffy: { number: '180', evolution: 2 },
  Ampharos: { number: '181', evolution: 3 },
  Marill: { number: '183', evolution: 1 },
  Azumarill: { number: '184', evolution: 2 },
  Sudowoodo: { number: '185', evolution: 1, meta: 'nohigher' },
  Hoppip: { number: '187', evolution: 1 },
  Skiploom: { number: '188', evolution: 2 },
  Jumpluff: { number: '189', evolution: 3 },
  Aipom: { number: '190', evolution: 1, meta: 'nohigher' },
  Sunkern: { number: '191', evolution: 1, meta: 'needevo' },
  Sunflora: { number: '192', evolution: 2, meta: 'isevo' },
  Yanma: { number: '193', evolution: 1, meta: 'nohigher' },
  Wooper: { number: '194', evolution: 1 },
  Quagsire: { number: '195', evolution: 2 },
  Murkrow: { number: '198', evolution: 1, meta: 'nohigher' },
  Misdreavus: { number: '200', evolution: 1, meta: 'nohigher' },
  Unown: { number: '201', evolution: 1, meta: 'nohigher' },
  Wobbuffet: { number: '202', evolution: 1, meta: 'nohigher' },
  Girafarig: { number: '203', evolution: 1, meta: 'nohigher' },
  Pineco: { number: '204', evolution: 1 },
  Forretress: { number: '205', evolution: 2 },
  Dunsparce: { number: '206', evolution: 1, meta: 'nohigher' },
  Gligar: { number: '207', evolution: 1, meta: 'nohigher' },
  Snubbull: { number: '209', evolution: 1 },
  Granbull: { number: '210', evolution: 2 },
  Qwilfish: { number: '211', evolution: 1, meta: 'nohigher' },
  Shuckle: { number: '213', evolution: 1, meta: 'nohigher' },
  Heracross: { number: '214', evolution: 1, meta: 'nohigher' },
  Sneasel: { number: '215', evolution: 1, meta: 'nohigher' },
  Teddiursa: { number: '216', evolution: 1 },
  Ursaring: { number: '217', evolution: 2 },
  Slugma: { number: '218', evolution: 1 },
  Magcargo: { number: '219', evolution: 2 },
  Swinub: { number: '220', evolution: 1 },
  Piloswine: { number: '221', evolution: 2 },
  Corsola: { number: '222', evolution: 1, meta: 'nohigher' },
  Remoraid: { number: '223', evolution: 1 },
  Octillery: { number: '224', evolution: 2 },
  Delibird: { number: '225', evolution: 1, meta: 'nohigher' },
  Mantine: { number: '226', evolution: 1, meta: 'nohigher' },
  Skarmory: { number: '227', evolution: 1, meta: 'nohigher' },
  Houndour: { number: '228', evolution: 1 },
  Houndoom: { number: '229', evolution: 2 },
  Phanpy: { number: '231', evolution: 1 },
  Donphan: { number: '232', evolution: 2 },
  Stantler: { number: '234', evolution: 1, meta: 'nohigher' },
  Smeargle: { number: '235', evolution: 1, meta: 'nohigher' },
  Tyrogue: { number: '236', evolution: 1, meta: 'special' },
  Hitmontop: { number: '237', evolution: 2, meta: 'special' },
  Miltank: { number: '241', evolution: 1, meta: 'nohigher' },
  Raikou: { number: '243', evolution: 1, meta: 'legend' },
  Entei: { number: '244', evolution: 1, meta: 'legend' },
  Suicune: { number: '245', evolution: 1, meta: 'legend' },
  Larvitar: { number: '246', evolution: 1 },
  Pupitar: { number: '247', evolution: 2 },
  Tyranitar: { number: '248', evolution: 3 },
  Lugia: { number: '249', evolution: 1, meta: 'legend' },
  'Ho-Oh': { number: '250', evolution: 1, meta: 'legend' },
  Celebi: { number: '251', evolution: 1, meta: 'legend' },
};