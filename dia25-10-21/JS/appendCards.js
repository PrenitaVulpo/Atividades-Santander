const appendCards = (pokemons, cardsArea) => {
	console.log(pokemons);
	const pokemonCards = pokemons.reduce((accumulator, pokemon) => {
		const pokemonImg = pokemon.sprites.front_default;

		const attributes = pokemon.stats;

		console.log(attributes);

		accumulator += `<div class="card ${pokemon.types[0].type.name}">
		<img src='${pokemonImg}' />
		<table>
			<tr><td>Life</td><td>${attributes[0].base_stat}</td></tr>
			<tr><td>Attack</td><td>${attributes[1].base_stat}</td></tr>
			<tr><td>Defense</td><td>${attributes[2].base_stat}</td></tr>
			<tr><td>Speed</td><td>${attributes[5].base_stat}</td></tr>
		</table>
	</div>`;

		return accumulator;
	}, '');

	cardsArea.innerHTML = pokemonCards;
};

export default appendCards;
