import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokedexReducer from './pokedexSlice';

const rootReducer = combineReducers({
	pokedex: pokedexReducer,
});

export const setupStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};
