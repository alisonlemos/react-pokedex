import { createSlice } from '@reduxjs/toolkit';
import { orderValues } from '@/services';

const initialState = {
	pokemonList: [],
	favoriteList: [],
	categoriesList: [],
	searchKey: '',
	order: orderValues.NATIONAL_NUMBER_ASC,
	favoriteFilter: false,
	categoriesFilter: [],
	loading: false,
};

export const pokedexSlice = createSlice({
	name: 'pokedex',
	initialState,
	reducers: {
		updatePokemonList: (state, action) => {
			state.pokemonList = action.payload;
		},
		updateSearchKey: (state, action) => {
			state.searchKey = action.payload;
		},
		updateOrder: (state, action) => {
			state.order = action.payload;
		},
		updateCategoriesList: (state, action) => {
			state.categoriesList = action.payload;
		},
		updateCategoriesFilter: (state, action) => {
			const item = action.payload;
			const exists = state.categoriesFilter.some(
				(category) => category === item
			);
			if (exists) {
				state.categoriesFilter = state.categoriesFilter.filter(
					(category) => category !== item
				);
			} else {
				state.categoriesFilter = [...state.categoriesFilter, item];
			}
		},
		updateFavoriteList: (state, action) => {
			const item = action.payload;
			const exists = state.favoriteList.some(
				(pokemon) => pokemon.national_number === item.national_number
			);
			if (exists) {
				state.favoriteList = state.favoriteList.filter(
					(pokemon) => pokemon.national_number !== item.national_number
				);
			} else {
				state.favoriteList = [...state.favoriteList, item];
			}
		},
		updateFavoriteFilter: (state, action) => {
			state.favoriteFilter = action.payload;
		},
		toggleLoading: (state, action) => {
			state.loading = action.payload;
		},
		resetFilters: (state) => {
			console.log(121);
			state.categoriesFilter = initialState.categoriesFilter;
			state.favoriteFilter = initialState.favoriteFilter
		},
	},
});

export const {
	updatePokemonList,
	updateSearchKey,
	updateOrder,
	updateFavoriteList,
	updateFavoriteFilter,
	updateCategoriesFilter,
	updateCategoriesList,
	toggleLoading,
	resetFilters
} = pokedexSlice.actions;

export default pokedexSlice.reducer;
