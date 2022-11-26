import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../testUtils';
import userEvent from '@testing-library/user-event';

import TextFilter from './TextFilter';

describe('Componente de filtro por nome ou numero', () => {
	it('deve atualizar o state searchKey com o valor digitado (ao clicar no botao com o icne de lupa)', () => {
		const searchKey = 'Lorem Ipsum';
		const { store } = renderWithProviders(<TextFilter />);
		const input = screen.getByRole('textbox');
		const button = screen.getByRole('button');
		fireEvent.change(input, { target: { value: searchKey } });
		userEvent.click(button);
		expect(store.getState().pokedex.searchKey).toBe(searchKey);
	});

	it('deve atualizar o state searchKey com o valor digitado (ao pressionar Enter)', () => {
		const searchKey = 'Lorem Ipsum';
		const { store } = renderWithProviders(<TextFilter />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: searchKey } });

		fireEvent.keyDown(input, { keyCode: '13' });

		expect(store.getState().pokedex.searchKey).toBe(searchKey);
	});

	it('não deve atualizar o state searchKey com o valor digitado (ao pressionar tecla diferente de Enter)', () => {
		const searchKey = 'Lorem Ipsum';
		const { store } = renderWithProviders(<TextFilter />);
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: searchKey } });

		fireEvent.keyDown(input, { keyCode: '17' });

		expect(store.getState().pokedex.searchKey).not.toBe(searchKey);
	});
});
