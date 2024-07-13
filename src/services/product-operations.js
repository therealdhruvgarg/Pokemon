import Pokemon from "../models/pokemon.js";
import doNetworkCall from "./api-client.js";

export default async function readAllProducts() {
  try {
    const obj = await doNetworkCall();
    const pokemons = obj["results"];
    const pokemonArray = pokemons.map((pokemonData) => {
      const pokemon = new Pokemon({
        name: pokemonData.name,
        url: pokemonData.url,
      });
      return pokemon;
    });
    return pokemonArray;
  } catch (err) {
    throw err;
  }
}
