const pokemonURLFetch = (name) =>
  "https://pokeapi.co/api/v2/pokemon/" + name + "/";

const pokemonList = ["articuno", "zapdos", "moltres"];

const pokemonFetching = () => {
  const promises = pokemonList.map((pokemon) =>
    fetch(pokemonURLFetch(pokemon)).then((response) => response.json())
  );

  const resolvedList = [];

  Promise.all(promises).then((pokemons) => {
    resolvedList.push(...pokemons);

    console.log("Resultado:", resolvedList);
  });
};

export default pokemonFetching;
