const generateStatProfiles = (pokemons) => {
	const statProfile = pokemons.reduce((accumulator, pokemon) => {
		const stats = pokemon.stats;

		accumulator = {
			...accumulator,
			[pokemon.name]: {
				hp: stats[0].base_stat,
				attack: stats[1].base_stat,
				defense: stats[2].base_stat,
				speed: stats[5].base_stat,
			},
		};

		return accumulator;
	}, {});

	console.log('profile: ', statProfile);
};

export default generateStatProfiles;
