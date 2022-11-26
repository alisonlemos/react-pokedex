import { screen } from '@testing-library/react';
import { setupStore } from '../../../store';
import { updateCategoriesList } from '../../../store/pokedexSlice';
import { renderWithProviders } from '../../../testUtils';
import userEvent from '@testing-library/user-event';

import CategoriesFilter from './CategoriesFilter';

describe('Componente de Filtro por categoria(tipo)', () => {
	it('deve atualizar o state categoriesFilter com o valor selecionado ao clicar em uma categoria', async () => {
		const categories = ['Grass'];
		const initialStore = setupStore();
		initialStore.dispatch(updateCategoriesList(categories));
		const { store } = renderWithProviders(<CategoriesFilter />, {
			store: initialStore,
		});

		const button = screen.getByRole('button', { name: /grass/i });
		expect(store.getState().pokedex.categoriesFilter).toEqual([]);
		await userEvent.click(button);
		expect(store.getState().pokedex.categoriesFilter).toEqual(categories);
	});
});
