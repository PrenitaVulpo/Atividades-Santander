import fetchPokemon from './JS/fetchPokemon.js';
import appendCards from './JS/appendCards.js';
import generateStatProfiles from './JS/generateStatProfiles.js';

const loadPage = async () => {
	const pokemons = await fetchPokemon();

	const cardsArea = document.querySelector('.cards-area');

	appendCards(pokemons, cardsArea);

	const actionButton = document.querySelector('.activate');
	const listItem = document.querySelector('.attribute-selector');

	actionButton.addEventListener('click', () => {
		console.log(listItem.value);
	});

	if (listItem.value) {
		let champion = null;
		let statToCompare = pokemon.stats[listItem.value].base_stat;

		console.log(statToCompare);
	}

	generateStatProfiles(pokemons);
};

loadPage();
