import fetchPokemon from './JS/fetchPokemon.js';
import appendCards from './JS/appendCards.js';
import generateStatProfiles from './JS/generateStatProfiles.js';
import compareStats from './JS/compareStats.js';

const loadPage = async () => {
	const pokemons = await fetchPokemon();

	const cardsArea = document.querySelector('.cards-area');

	appendCards(pokemons, cardsArea);

	const actionButton = document.querySelector('.activate');

	actionButton.addEventListener('click', () => {
		compareStats();
	});

	const statProfiles = generateStatProfiles(pokemons);
};

loadPage();
