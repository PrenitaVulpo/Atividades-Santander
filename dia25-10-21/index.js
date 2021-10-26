import fetchPokemon from './JS/fetchPokemon.js';
import appendCards from './JS/appendCards.js';

const loadPage = async () => {
	const pokemons = await fetchPokemon();

	const cardsArea = document.querySelector('.cards-area');

	appendCards(pokemons, cardsArea);
};

loadPage();
