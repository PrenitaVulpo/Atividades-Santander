const appendCards = (pokemons, cardsArea) => {
	console.log(pokemons);
	const pokemonCards = pokemons.reduce((accumulator, pokemon) => {
		const pokemonImg = pokemon.sprites.front_default;

		const attributes = pokemon.stats;
		console.log(pokemon.types[0].type.name);

		accumulator += `<div class="card ${pokemon.types[0].type.name}">
		<img src='${pokemonImg}' />
		<table>
			<tr><td>Life</td><td>90</td></tr>
			<tr><td>Attack</td><td>90</td></tr>
			<tr><td>Defense</td><td>90</td></tr>
			<tr><td>Speed</td><td>90</td></tr>
		</table>
	</div>`;

		return accumulator;
	}, '');

	cardsArea.innerHTML = pokemonCards;
};

export default appendCards;
