const poke_container = document.getElementById("poke_container");

const pokemons_number = 50;


// get pokemon data
const getPokemon = async (id) => {
    const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon); // passing the data
};

// iterate
const fetchPokemon = async () => {
  for (let i = 1; i < pokemons_number; i++) {
    await getPokemon(i);
  }
};

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");

  const pokemonInnerHTML = `

        ${pokemon.name}

    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl); // append to the dom element
}
