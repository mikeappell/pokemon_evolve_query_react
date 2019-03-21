// Legend for "meta"data:
// * "needevo" - Requires an "evolution" item
// * "isevo" - Product of an "evolution" item
// * "baby" - Baby pokemon
// * "nohigher" - No higher "evolution"s available (currently)
// * "legend" - Legendary pokemon
// * "special" - Special for some other reason

// NOTES
// I removed "needevo" from Seadra so it would still show up as Horsea"s "evolution"

export const PokeDB = {
	POKEMON_DB	:	[
		{ "name": "Generation 1",	"families": [
			[
				{ "name": "Bulbasaur",	"number": "1",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Ivysaur",	"number": "2",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Venusaur",	"number": "3",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Charmander",	"number": "4",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Charmeleon",	"number": "5",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Charizard",	"number": "6",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Squirtle",	"number": "7",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Wartortle",	"number": "8",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Blastoise",	"number": "9",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Caterpie",	"number": "10",		"evolution": 1,	"candy": 12,	"meta": ""},
				{ "name": "Metapod",	"number": "11",		"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Butterfree",	"number": "12",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Weedle",		"number": "13",		"evolution": 1,	"candy": 12,	"meta": ""},
				{ "name": "Kakuna",		"number": "14",		"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Beedrill",	"number": "15",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Pidgey",		"number": "16",		"evolution": 1,	"candy": 12,	"meta": ""},
				{ "name": "Pidgeotto",	"number": "17",		"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Pidgeot",	"number": "18",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Rattata",	"number": "19",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Raticate",	"number": "20",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Spearow",	"number": "21",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Fearow",		"number": "22",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Ekans",		"number": "23",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Arbok",		"number": "24",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Pichu",		"number": "172",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Pikachu",	"number": "25",		"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Raichu",		"number": "26",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Sandshrew",	"number": "27",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Sandslash",	"number": "28",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Nidoran♀",	"number": "29",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Nidorina",	"number": "30",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Nidoqueen",	"number": "31",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Nidoran♂",	"number": "32",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Nidorino",	"number": "33",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Nidoking",	"number": "34",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Cleffa",		"number": "173",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Clefairy",	"number": "35",		"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Clefable",	"number": "36",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Vulpix",		"number": "37",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Ninetales",	"number": "38",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Igglybuff",	"number": "174",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Jigglypuff",	"number": "39",		"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Wigglytuff",	"number": "40",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Zubat",		"number": "41",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Golbat",		"number": "42",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Crobat",		"number": "169",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Oddish",		"number": "43",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Gloom",		"number": "44",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Vileplume",	"number": "45",		"evolution": 3,	"candy": 0,		"meta": "nohigher"},
				{ "name": "Bellossom",	"number": "182",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Paras",		"number": "46",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Parasect",	"number": "47",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Venonat",	"number": "48",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Venomoth",	"number": "49",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Diglett",	"number": "50",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Dugtrio",	"number": "51",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Meowth",		"number": "52",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Persian",	"number": "53",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Psyduck",	"number": "54",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Golduck",	"number": "55",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mankey",		"number": "56",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Primeape",	"number": "57",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Growlithe",	"number": "58",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Arcanine",	"number": "59",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Poliwag",	"number": "60",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Poliwhirl",	"number": "61",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Poliwrath",	"number": "62",		"evolution": 3,	"candy": 0,		"meta": "nohigher"},
				{ "name": "Politoed",	"number": "186",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Abra",		"number": "63",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Kadabra",	"number": "64",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Alakazam",	"number": "65",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Machop",		"number": "66",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Machoke",	"number": "67",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Machamp",	"number": "68",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Bellsprout",	"number": "69",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Weepinbell",	"number": "70",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Victreebel",	"number": "71",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Tentacool",	"number": "72",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Tentacruel",	"number": "73",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Geodude",	"number": "74",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Graveler",	"number": "75",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Golem",		"number": "76",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Ponyta",		"number": "77",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Rapidash",	"number": "78",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Slowpoke",	"number": "79",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Slowbro",	"number": "80",		"evolution": 2,	"candy": 0,		"meta": "nohigher"},
				{ "name": "Slowking",	"number": "199",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Magnemite",	"number": "81",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Magneton",	"number": "82",		"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Magnezone",	"number": "462",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Farfetch'd",	"number": "83",		"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Doduo",		"number": "84",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Dodrio",		"number": "85",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Seel",		"number": "86",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Dewgong",	"number": "87",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Grimer",		"number": "88",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Muk",		"number": "89",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Shellder",	"number": "90",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Cloyster",	"number": "91",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Gastly",		"number": "92",		"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Haunter",	"number": "93",		"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Gengar",		"number": "94",		"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Onix",		"number": "95",		"evolution": 1,	"candy": 50,	"meta": "needevo"},
				{ "name": "Steelix",	"number": "208",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Drowzee",	"number": "96",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Hypno",		"number": "97",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Krabby",		"number": "98",		"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Kingler",	"number": "99",		"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Voltorb",	"number": "100",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Electrode",	"number": "101",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Exeggcute",	"number": "102",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Exeggutor",	"number": "103",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Cubone",		"number": "104",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Marowak",	"number": "105",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Tyrogue",	"number": "236",	"evolution": 1,	"candy": 25,	"meta": "baby,special"},
				{ "name": "Hitmonlee",	"number": "106",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Hitmonchan",	"number": "107",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Hitmontop",	"number": "237",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"}
			],
			[
				{ "name": "Lickitung",	"number": "108",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Lickilicky",	"number": "463",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Koffing",	"number": "109",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Weezing",	"number": "110",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Rhyhorn",	"number": "111",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Rhydon",		"number": "112",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Rhyperior",	"number": "464",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Happiny",	"number": "440",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Chansey",	"number": "113",	"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Blissey",	"number": "242",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Tangela",	"number": "114",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Tangrowth",	"number": "465",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Kangaskhan",	"number": "115",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Horsea",		"number": "116",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Seadra",		"number": "117",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Kingdra",	"number": "230",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Goldeen",	"number": "118",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Seaking",	"number": "119",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Staryu",		"number": "120",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Starmie",	"number": "121",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mime Jr.",	"number": "439",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Mr Mime",	"number": "122",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Scyther",	"number": "123",	"evolution": 1,	"candy": 50,	"meta": "needevo"},
				{ "name": "Scizor",		"number": "212",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Smoochum",	"number": "238",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Jynx",		"number": "124",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Elekid",		"number": "239",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Electabuzz",	"number": "125",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Electivire",	"number": "466",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Magby",		"number": "240",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Magmar",		"number": "126",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Magmortar",	"number": "467",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Pinsir",		"number": "127",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Tauros",		"number": "128",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Magikarp",	"number": "129",	"evolution": 1,	"candy": 400,	"meta": ""},
				{ "name": "Gyarados",	"number": "130",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Lapras",		"number": "131",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Ditto",		"number": "132",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Eevee",		"number": "133",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Vaporeon",	"number": "134",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Jolteon",	"number": "135",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Flareon",	"number": "136",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"}
			], // The Eevee family is so long that it makes the page ugly, hence the split.
			[
				{ "name": "Espeon",		"number": "196",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Umbreon",	"number": "197",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Leafeon",	"number": "470",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"},
				{ "name": "Glaceon",	"number": "471",	"evolution": 2,	"candy": 0,		"meta": "nohigher,special"}
			],
			[
				{ "name": "Porygon",	"number": "137",	"evolution": 1,	"candy": 25,	"meta": "needevo"},
				{ "name": "Porygon2",	"number": "233",	"evolution": 2,	"candy": 100,	"meta": "needevo,isevo"},
				{ "name": "Porygon-Z",	"number": "474",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Omanyte",	"number": "138",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Omastar",	"number": "139",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Kabuto",		"number": "140",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Kabutops",	"number": "141",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Aerodactyl",	"number": "142",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Munchlax",	"number": "446",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Snorlax",	"number": "143",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Articuno",	"number": "144",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Zapdos",		"number": "145",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Moltres",	"number": "146",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Dratini",	"number": "147",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Dragonair",	"number": "148",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Dragonite",	"number": "149",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mewtwo",		"number": "150",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Mew",		"number": "151",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			]
		]},
		{ "name": "Generation 2",	"families": [
			[
				{ "name": "Chikorita",	"number": "152",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Bayleef",	"number": "153",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Meganium",	"number": "154",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Cyndaquil",	"number": "155",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Quilava",	"number": "156",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Typhlosion",	"number": "157",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Totodile",	"number": "158",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Croconaw",	"number": "159",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Feraligatr",	"number": "160",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Sentret",	"number": "161",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Furret",		"number": "162",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Hoothoot",	"number": "163",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Noctowl",	"number": "164",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Ledyba",		"number": "165",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Ledian",		"number": "166",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Spinarak",	"number": "167",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Ariados",	"number": "168",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Chinchou",	"number": "170",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Lanturn",	"number": "171",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Togepi",		"number": "175",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Togetic",	"number": "176",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Togekiss",	"number": "468",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Natu",		"number": "177",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Xatu",		"number": "178",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mareep",		"number": "179",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Flaaffy",	"number": "180",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Ampharos",	"number": "181",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Azurill",	"number": "298",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Marill",		"number": "183",	"evolution": 2,	"candy": 25,	"meta": ""},
				{ "name": "Azumarill",	"number": "184",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Bonsly",		"number": "438",	"evolution": 1,	"candy": 50,	"meta": "baby"},
				{ "name": "Sudowoodo",	"number": "185",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Hoppip",		"number": "187",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Skiploom",	"number": "188",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Jumpluff",	"number": "189",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Aipom",		"number": "190",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Ambipom",	"number": "424",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Sunkern",	"number": "191",	"evolution": 1,	"candy": 50,	"meta": "needevo"},
				{ "name": "Sunflora",	"number": "192",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Yanma",		"number": "193",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Yanmega",	"number": "469",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Wooper",		"number": "194",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Quagsire",	"number": "195",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Murkrow",	"number": "198",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Honchkrow",	"number": "430",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Misdreavus",	"number": "200",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Mismagius",	"number": "429",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Unown",		"number": "201",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Wynaut",		"number": "360",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Wobbuffet",	"number": "202",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Girafarig",	"number": "203",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Pineco",		"number": "204",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Forretress",	"number": "205",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Dunsparce",	"number": "206",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Gligar",		"number": "207",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Gliscor",	"number": "472",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Snubbull",	"number": "209",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Granbull",	"number": "210",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Qwilfish",	"number": "211",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Shuckle",	"number": "213",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Heracross",	"number": "214",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Sneasel",	"number": "215",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Weavile",	"number": "461",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Teddiursa",	"number": "216",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Ursaring",	"number": "217",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Slugma",		"number": "218",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Magcargo",	"number": "219",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Swinub",		"number": "220",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Piloswine",	"number": "221",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Mamoswine",	"number": "473",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Corsola",	"number": "222",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Remoraid",	"number": "223",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Octillery",	"number": "224",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Delibird",	"number": "225",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mantyke",	"number": "458",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Mantine",	"number": "226",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Skarmory",	"number": "227",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Houndour",	"number": "228",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Houndoom",	"number": "229",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Phanpy",		"number": "231",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Donphan",	"number": "232",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Stantler",	"number": "234",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Smeargle",	"number": "235",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Miltank",	"number": "241",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Raikou",		"number": "243",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Entei",		"number": "244",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Suicune",	"number": "245",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Larvitar",	"number": "246",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Pupitar",	"number": "247",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Tyranitar",	"number": "248",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Lugia",		"number": "249",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Ho-Oh",		"number": "250",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Celebi",		"number": "251",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			]
		]},
		{ "name": "Generation 3",	"families": [
			[
				{ "name": "Treecko",	"number": "252",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Grovyle",	"number": "253",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Sceptile",	"number": "254",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Torchic",	"number": "255",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Combusken",	"number": "256",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Blaziken",	"number": "257",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mudkip",		"number": "258",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Marshtomp",	"number": "259",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Swampert",	"number": "260",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Poochyena",	"number": "261",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Mightyena",	"number": "262",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Zigzagoon",	"number": "263",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Linoone",	"number": "264",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Wurmple",	"number": "265",	"evolution": 1,	"candy": 12,	"meta": ""},
				{ "name": "Silcoon",	"number": "266",	"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Beautifly",	"number": "267",	"evolution": 3,	"candy": 0	,	"meta": "nohigher"},
				{ "name": "Cascoon",	"number": "268",	"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Dustox",		"number": "269",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Lotad",		"number": "270",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Lombre",		"number": "271",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Ludicolo",	"number": "272",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Seedot",		"number": "273",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Nuzleaf",	"number": "274",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Shiftry",	"number": "275",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Taillow",	"number": "276",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Swellow",	"number": "277",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Wingull",	"number": "278",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Pelipper",	"number": "279",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Ralts",		"number": "280",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Kirlia",		"number": "281",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Gardevoir",	"number": "282",	"evolution": 3,	"candy": 100,	"meta": "nohigher"},
				{ "name": "Gallade",	"number": "475",	"evolution": 3,	"candy": 0,		"meta": "isevo,nohigher"}
			],
			[
				{ "name": "Surskit",	"number": "283",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Masquerain",	"number": "284",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Shroomish",	"number": "285",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Breloom",	"number": "286",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Slakoth",	"number": "287",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Vigoroth",	"number": "288",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Slaking",	"number": "289",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Nincada",	"number": "290",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Ninjask",	"number": "291",	"evolution": 2,	"candy": 0,		"meta": "nohigher"},
				{ "name": "Shedinja",	"number": "292",	"evolution": 3,	"candy": 0,		"meta": "special,nohigher"}
			],
			[
				{ "name": "Whismur",	"number": "293",	"evolution": 1,	"candy": 12,	"meta": ""},
				{ "name": "Loudred",	"number": "294",	"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Exploud",	"number": "295",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Makuhita",	"number": "296",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Hariyama",	"number": "297",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Nosepass",	"number": "299",	"evolution": 1,	"candy": 100,	"meta": "needevo"},
				{ "name": "Probopass",	"number": "476",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Skitty",		"number": "300",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Delcatty",	"number": "301",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Sableye",	"number": "302",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Mawile",		"number": "303",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Aron",		"number": "304",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Lairon",		"number": "305",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Aggron",		"number": "306",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Meditite",	"number": "307",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Medicham",	"number": "308",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Electrike",	"number": "309",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Manectric",	"number": "310",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Plusle",		"number": "311",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Minun",		"number": "312",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Volbeat",	"number": "313",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Illumise",	"number": "314",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Budew",		"number": "406",	"evolution": 1,	"candy": 25,	"meta": "baby"},
				{ "name": "Roselia",	"number": "315",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Roserade",	"number": "407",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Gulpin",		"number": "316",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Swalot",		"number": "317",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Carvanha",	"number": "318",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Sharpedo",	"number": "319",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Wailmer",	"number": "320",	"evolution": 1,	"candy": 400,	"meta": ""},
				{ "name": "Wailord",	"number": "321",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Numel",		"number": "322",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Camerupt",	"number": "323",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Torkoal",	"number": "324",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Spoink",		"number": "325",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Grumpig",	"number": "326",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Spinda",		"number": "327",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Trapinch",	"number": "328",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Vibrava",	"number": "329",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Flygon",		"number": "330",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Cacnea",		"number": "331",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Cacturne",	"number": "332",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Swablu",		"number": "333",	"evolution": 1,	"candy": 400,	"meta": ""},
				{ "name": "Altaria",	"number": "334",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Zangoose",	"number": "335",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Seviper",	"number": "336",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Lunatone",	"number": "337",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Solrock",	"number": "338",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Barboach",	"number": "339",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Whiscash",	"number": "340",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Corphish",	"number": "341",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Crawdaunt",	"number": "342",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Baltoy",		"number": "343",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Claydol",	"number": "344",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Lileep",		"number": "345",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Cradily",	"number": "346",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Anorith",	"number": "347",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Armaldo",	"number": "348",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Feebas",		"number": "349",	"evolution": 1,	"candy": 100,	"meta": ""},
				{ "name": "Milotic",	"number": "350",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Castform",	"number": "351",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Kecleon",	"number": "352",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Shuppet",	"number": "353",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Banette",	"number": "354",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Duskull",	"number": "355",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Dusclops",	"number": "356",	"evolution": 2,	"candy": 100,	"meta": "needevo"},
				{ "name": "Dusknoir",	"number": "477",	"evolution": 3,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Tropius",	"number": "357",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Chingling",	"number": "433",	"evolution": 1,	"candy": 50,	"meta": "baby"},
				{ "name": "Chimecho",	"number": "358",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Absol",		"number": "359",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Snorunt",	"number": "361",	"evolution": 1,	"candy": 100,	"meta": ""},
				{ "name": "Glalie",		"number": "362",	"evolution": 2,	"candy": 0,		"meta": "nohigher"},
				{ "name": "Froslass",	"number": "478",	"evolution": 2,	"candy": 0,		"meta": "nohigher,isevo"}
			],
			[
				{ "name": "Spheal",		"number": "363",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Sealeo",		"number": "364",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Walrein",	"number": "365",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Clamperl",	"number": "366",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Huntail",	"number": "367",	"evolution": 2,	"candy": 0,		"meta": "nohigher"},
				{ "name": "Gorebyss",	"number": "368",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Relicanth",	"number": "369",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Luvdisc",	"number": "370",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Bagon",		"number": "371",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Shelgon",	"number": "372",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Salamence",	"number": "373",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Beldum",		"number": "374",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Metang",		"number": "375",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Metagross",	"number": "376",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Regirock",	"number": "377",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Regice",		"number": "378",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Registeel",	"number": "379",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Latias",		"number": "380",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Latios",		"number": "381",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Kyogre",		"number": "382",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Groudon",	"number": "383",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Rayquaza",	"number": "384",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Jirachi",	"number": "385",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Deoxys",		"number": "386",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			]
		]},
		{ "name": "Generation 4",	"families": [
			[
				{ "name": "Turtwig",	"number": "387",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Grotle",		"number": "388",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Torterra",	"number": "389",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Chimchar",	"number": "390",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Monferno",	"number": "391",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Infernape",	"number": "392",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Piplup",		"number": "393",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Prinplup",	"number": "394",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Empoleon",	"number": "395",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Starly",		"number": "396",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Staravia",	"number": "397",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Staraptor",	"number": "398",	"evolution": 3,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Bidoof",		"number": "399",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Bibarel",	"number": "400",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Kricketot",	"number": "401",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Kricketot",	"number": "402",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Shinx",		"number": "403",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Luxio",		"number": "404",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Luxray",		"number": "405",	"evolution": 3,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Cranidos",	"number": "408",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Rampardos",	"number": "409",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Shieldon",	"number": "410",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Bastiodon",	"number": "411",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Burmy",		"number": "412",	"evolution": 1,	"candy": 12,	"meta": ""},
				{ "name": "Wormadam",	"number": "413",	"evolution": 2,	"candy": 50,	"meta": ""},
				{ "name": "Mothim",		"number": "414",	"evolution": 3,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Combee",		"number": "415",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Vespiquen",	"number": "416",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Pachirisu",	"number": "417",	"evolution": 1,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Buizel",		"number": "418",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Floatzel",	"number": "419",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Cherubi",	"number": "420",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Cherrim",	"number": "421",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Shellos",	"number": "422",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Gastrodon",	"number": "423",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Drifloon",	"number": "425",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Drifblim",	"number": "426",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Buneary",	"number": "427",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Lopunny",	"number": "428",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Glameow",	"number": "431",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Purugly",	"number": "432",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Stunky",		"number": "434",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Skuntank",	"number": "435",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Bronzor",	"number": "436",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Bronzong",	"number": "437",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Chatot",		"number": "441",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Spiritomb",	"number": "442",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Gible",		"number": "443",	"evolution": 1,	"candy": 25,	"meta": ""},
				{ "name": "Gabite",		"number": "444",	"evolution": 2,	"candy": 100,	"meta": ""},
				{ "name": "Garchomp",	"number": "445",	"evolution": 3,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Riolu",		"number": "447",	"evolution": 1,	"candy": 50,	"meta": "baby"},
				{ "name": "Lucario",	"number": "448",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Hippopotas",	"number": "449",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Hippowdon",	"number": "450",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Skorupi",	"number": "451",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Drapion",	"number": "452",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Croagunk",	"number": "453",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Toxicroak",	"number": "454",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Carnivine",	"number": "455",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Finneon",	"number": "456",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Lumineon",	"number": "457",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Snover",		"number": "459",	"evolution": 1,	"candy": 50,	"meta": ""},
				{ "name": "Abomasnow",	"number": "460",	"evolution": 2,	"candy": 0	,	"meta": "nohigher"}
			],
			[
				{ "name": "Rotom",		"number": "479",	"evolution": 1,	"candy": 0,		"meta": "nohigher"}
			],
			[
				{ "name": "Uxie",		"number": "480",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Mesprit",	"number": "481",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Azelf",		"number": "482",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Dialga",		"number": "483",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Palkia",		"number": "484",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Heatran",	"number": "485",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Regigigas",	"number": "486",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Giratina",	"number": "487",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Cresselia",	"number": "488",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Phione",		"number": "489",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Manaphy",	"number": "490",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Darkrai",	"number": "491",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Shaymin",	"number": "492",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			],
			[
				{ "name": "Arceus",		"number": "493",	"evolution": 1,	"candy": 0,		"meta": "legend"}
			]
		]},
		{ "name": "Generation 8",	"families": [
			[
				{ "name": "Meltan",		"number": "808",	"evolution": 1,	"candy": 400,	"meta": ""},
				{ "name": "Melmetal",	"number": "809",	"evolution": 2,	"candy": 0,		"meta": "nohigher"}
			],
		]}
	],
}
