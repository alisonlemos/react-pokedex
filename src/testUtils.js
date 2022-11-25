import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { orderValues } from './services';
import { setupStore } from './store';

export const mockedPokemonList = {
	data: {
		results: [
			{
				national_number: '99999',
				sprites: {
					normal: 'normal_sprite_url',
				},
				name: 'Pokemon Name',
				type: ['Type_1', 'Type_2'],
			},
		],
	},
};

export const initialState = {
	pokemonList: [],
	favoriteList: [],
	categoriesList: [],
	searchKey: '',
	order: orderValues.NATIONAL_NUMBER_ASC,
	favoriteFilter: false,
	categoriesFilter: [],
	loading: false,
};

export function renderWithProviders(
	ui,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
