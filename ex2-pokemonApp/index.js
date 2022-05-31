"use strict";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error(`HTTP Error ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  const pokemonDivContainer = document.createElement("div");
  pokemonDivContainer.setAttribute("class", "div-container");

  const pokemonBtnElement = document.createElement("button");
  pokemonBtnElement.textContent = "Get Pokemon!";
  pokemonBtnElement.setAttribute("class", "btn-elem");
  pokemonBtnElement.setAttribute("type", "submit");

  const pokemonSelectElement = document.createElement("select");
  pokemonSelectElement.setAttribute("class", "select-elem");

  pokemonDivContainer.append(pokemonBtnElement, pokemonSelectElement);
  document.body.appendChild(pokemonDivContainer);

  pokemonBtnElement.addEventListener("click", async () => {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const data = await fetchData(pokemonUrl);
    const getDataFromPokemon = data.results;

    getDataFromPokemon.forEach((getData) => {
      const pokemonOptionElement = document.createElement("option");
      pokemonOptionElement.textContent = getData.name;
      pokemonSelectElement.appendChild(pokemonOptionElement);
    });
    pokemonSelectElement.addEventListener("change", fetchImage);
  });
}

async function fetchImage(image) {
  const innerHtmlImgElem = document.querySelector("img");
  if (innerHtmlImgElem) {
    innerHtmlImgElem.remove();
  }

  const getPokemonClickedElem = image.target.value;
  const getTargetPokemonImg = `https://pokeapi.co/api/v2/pokemon/${getPokemonClickedElem}`;
  const data = await fetchData(getTargetPokemonImg);

  const pokemonDivElement = document.createElement("div");

  const pokemonImageElement = document.createElement("img");
  pokemonImageElement.setAttribute("class", "pokemon-img");
  pokemonImageElement.src =
    data.sprites.other["official-artwork"].front_default;
  pokemonImageElement.alt = "pokemon-img";

  pokemonDivElement.appendChild(pokemonImageElement);

  document.body.appendChild(pokemonDivElement);
}

function main() {
  fetchAndPopulatePokemons();
}

window.addEventListener("load", main);
