import { screen } from '@testing-library/react';
import { setupStore } from '../../../store';
import {
	updatePokemonList,
	updateFavoriteList,
} from '../../../store/pokedexSlice';
import { mockedPokemonList, renderWithProviders } from '../../../testUtils';
import userEvent from '@testing-library/user-event';

import PokemonList from './PokemonList';

describe('Componente de Lista dos Pokemons', () => {
	it('deve adicionar o pokemon da lista de favoritos (state favoriteList)', () => {
		const {
			data: { results },
		} = mockedPokemonList;
		const pokemon = { ...results[0] };
		const initialStore = setupStore();
		initialStore.dispatch(updatePokemonList([pokemon]));
		const { store } = renderWithProviders(<PokemonList />, {
			store: initialStore,
		});
		const favoriteButton = screen.getByRole('button');

		expect(store.getState().pokedex.favoriteList).toEqual([]);
		userEvent.click(favoriteButton);
		expect(store.getState().pokedex.favoriteList).toEqual([pokemon]);
	});

	it('deve remover o pokemon da lista de favoritos (state favoriteList)', () => {
		const {
			data: { results },
		} = mockedPokemonList;
		const pokemon = { ...results[0] };
		const initialStore = setupStore();
		initialStore.dispatch(updatePokemonList([pokemon]));
		initialStore.dispatch(updateFavoriteList(pokemon));
		const { store } = renderWithProviders(<PokemonList />, {
			store: initialStore,
		});
		const favoriteButton = screen.getByRole('button');

		expect(store.getState().pokedex.favoriteList).toEqual([pokemon]);
		userEvent.click(favoriteButton);
		expect(store.getState().pokedex.favoriteList).toEqual([]);
	});
});
