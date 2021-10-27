const pokemonURLFetch = (name) =>
	'https://pokeapi.co/api/v2/pokemon/' + name + '/';

const pokemonList = ['articuno', 'zapdos', 'moltres'];

const pokemonFetching = async () => {
	const promises = pokemonList.map((pokemon) =>
		fetch(pokemonURLFetch(pokemon)).then((response) => response.json()),
	);

	const resolvedList = [];

	await Promise.all(promises).then((pokemons) => {
		resolvedList.push(...pokemons);
	});

	return resolvedList;
};

export default pokemonFetching;
