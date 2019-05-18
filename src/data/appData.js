const pokemonArray = [
  {"id":1,"name":"bulbasaur","types":["poison","grass"], "evolution": null, "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", "catchphrase": "Saur! Bulbasaur!"},
  {"id":2,"name":"ivysaur","types":["poison","grass"], "evolution":"bulbasaur", "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", "catchphrase": "IVYsaur!"},
  {"id":3,"name":"venusaur","types":["poison","grass"], "evolution":"ivysaur", "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png", "catchphrase": "Rrrhhhagghhh!"},
  {"id":4,"name":"charmander","types":["fire"],"evolution":null, "abilities": ["solar-power", "blaze"],"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png", "catchphrase": "Char! Charmander!"},
  {"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander", "abilities": ["solar-power", "blaze"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png", "catchphrase": "Charrgghh!"},
  {"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon", "abilities": ["solar-power", "blaze"],"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png", "catchphrase": "Garrgghhhh!"},
  {"id":7,"name":"squirtle","types":["water"],"evolution":null, "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", "catchphrase": "Squirtle! Squirtle!"},
  {"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle", "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png", "catchphrase": "War! War! Wartortle!"},
  {"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle", "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png", "catchphrase": "Raarrggghhhh!"},
  {"id":10,"name":"caterpie","types":["bug"],"evolution":null, "abilities": ["run-away", "shield-dust"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png", "catchphrase": "CaterpIE!"}
];

export { pokemonArray };