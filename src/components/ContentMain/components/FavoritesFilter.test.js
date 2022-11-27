import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/testUtils';

import FavoritesFilter from './FavoritesFilter';

describe('Componente de Filtro por favoritos', () => {
	it('deve alternar o valor do state favoriteFilter entre true e false', async () => {
		const { store } = renderWithProviders(<FavoritesFilter />);

		const switchButton = screen.getByRole('checkbox', {
			name: /fitrar favoritos/i,
		});
		expect(store.getState().pokedex.favoriteFilter).toBe(false);
		await userEvent.click(switchButton);
		expect(store.getState().pokedex.favoriteFilter).toEqual(true);
	});
});
