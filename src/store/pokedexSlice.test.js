import { orderValues } from '@/services';
import { initialState, mockedPokemonList } from '@/testUtils';
import reducer, {
	toggleLoading,
	updateCategoriesFilter,
	updateCategoriesList,
	updateFavoriteFilter,
	updateFavoriteList,
	updateOrder,
	updatePokemonList,
	updateSearchKey,
} from './pokedexSlice';

describe('Store da Aplicação', () => {
	it('deve retornar o estado inicial', () => {
		expect(reducer(undefined, { type: undefined })).toEqual(initialState);
	});

	it('deve atualizar pokemonList ao chamar updatePokemonList', () => {
		const {
			data: { results },
		} = mockedPokemonList;
		const newValue = [{ ...results[0] }];

		const action = updatePokemonList(newValue);
		const state = reducer(initialState, action);

		expect(state.pokemonList).toEqual(newValue);
	});

	it('deve atualizar searchKey ao chamar updateSearchKey', () => {
		const newValue = 'Lorem Ipsum';
		const action = updateSearchKey(newValue);
		const state = reducer(initialState, action);

		expect(state.searchKey).toBe(newValue);
	});

	it('deve atualizar order ao chamar updateOrder', () => {
		const newValue = {
			order: orderValues.NAME_DESC,
		};

		const action = updateOrder(newValue);
		const state = reducer(initialState, action);

		expect(state.order).toBe(newValue);
	});

	it('deve atualizar categoriesList ao chamar updateCategoriesList', () => {
		const newValue = ['Lorem Ipsum'];

		const action = updateCategoriesList(newValue);
		const state = reducer(initialState, action);

		expect(state.categoriesList).toBe(newValue);
	});

	it('deve atualizar categoriesFilter ao chamar updateCategoriesFilter', () => {
		const newValue = 'Lorem Ipsum';

		const action = updateCategoriesFilter(newValue);
		const state = reducer(initialState, action);

		expect(state.categoriesFilter).toEqual([newValue]);
	});

	it('deve remover o elemento de categoriesFilter ao chamar updateCategoriesFilter quando este elemento ja existir no state', () => {
		const newValue = 'Lorem Ipsum';

		const action = updateCategoriesFilter(newValue);
		const state = reducer(
			{ ...initialState, categoriesFilter: [newValue] },
			action
		);

		expect(state.categoriesFilter).toEqual([]);
	});

	it('deve atualizar favoriteList ao chamar updateFavoriteList', () => {
		const {
			data: { results },
		} = mockedPokemonList;
		const newValue = { ...results[0] };

		const action = updateFavoriteList(newValue);
		const state = reducer(initialState, action);

		expect(state.favoriteList).toEqual([newValue]);
	});

	it('deve remover o elemento de favoriteList ao chamar updateFavoriteList quando este elemento ja existir no state', () => {
		const {
			data: { results },
		} = mockedPokemonList;
		const newValue = { ...results[0] };

		const action = updateFavoriteList(newValue);
		const state = reducer(
			{ ...initialState, favoriteList: [newValue] },
			action
		);

		expect(state.favoriteList).toEqual([]);
	});

	it('deve atualizar favoriteFilter ao chamar updateFavoriteFilter', () => {
		const newValue = true;

		const action = updateFavoriteFilter(newValue);
		const state = reducer(initialState, action);

		expect(state.favoriteFilter).toBe(newValue);
	});

	it('deve atualizar loading ao chamar toggleLoading', () => {
		const newValue = true;

		const action = toggleLoading(newValue);
		const state = reducer(initialState, action);

		expect(state.loading).toBe(newValue);
	});
});
