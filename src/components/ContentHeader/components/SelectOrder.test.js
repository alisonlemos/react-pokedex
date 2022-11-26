import { fireEvent, screen, within } from '@testing-library/react';
import { setupStore } from '../../../store';
import { updateOrder } from '../../../store/pokedexSlice';
import { renderWithProviders } from '../../../testUtils';

import SelectOrder from './SelectOrder';
import { orderValues } from '../../../services';

describe('Componente de Ordenação', () => {
	it('deve atualizar o state order com o valor referente ordenação por numero ascendente', async () => {
		const order = orderValues.NATIONAL_NUMBER_ASC;
		const initialStore = setupStore();
		initialStore.dispatch(updateOrder(order));
		const { store } = renderWithProviders(<SelectOrder />, {
			store: initialStore,
		});

		const selectButton = screen.getByRole('button');
		fireEvent.mouseDown(selectButton);
		const options = within(screen.getByRole('listbox'));
		fireEvent.click(options.getByText(/menor número primeiro/i));
		expect(store.getState().pokedex.order).toEqual(order);
	});

	it('deve atualizar o state order com o valor referente ordenação por numero descendente', async () => {
		const order = orderValues.NATIONAL_NUMBER_ASC;
		const initialStore = setupStore();
		initialStore.dispatch(updateOrder(order));
		const { store } = renderWithProviders(<SelectOrder />, {
			store: initialStore,
		});

		const selectButton = screen.getByRole('button');
		fireEvent.mouseDown(selectButton);
		const options = within(screen.getByRole('listbox'));
		fireEvent.click(options.getByText(/maior número primeiro/i));
		expect(store.getState().pokedex.order).toEqual(
			orderValues.NATIONAL_NUMBER_DESC
		);
	});

	it('deve atualizar o state order com o valor referente ordenação por nome ascendente', async () => {
		const order = orderValues.NATIONAL_NUMBER_ASC;
		const initialStore = setupStore();
		initialStore.dispatch(updateOrder(order));
		const { store } = renderWithProviders(<SelectOrder />, {
			store: initialStore,
		});

		const selectButton = screen.getByRole('button');
		fireEvent.mouseDown(selectButton);
		const options = within(screen.getByRole('listbox'));
		fireEvent.click(options.getByText(/nome de a - z/i));
		expect(store.getState().pokedex.order).toEqual(orderValues.NAME_ASC);
	});

	it('deve atualizar o state order com o valor referente ordenação por nome descendente', async () => {
		const order = orderValues.NATIONAL_NUMBER_ASC;
		const initialStore = setupStore();
		initialStore.dispatch(updateOrder(order));
		const { store } = renderWithProviders(<SelectOrder />, {
			store: initialStore,
		});

		const selectButton = screen.getByRole('button');
		fireEvent.mouseDown(selectButton);
		const options = within(screen.getByRole('listbox'));
		fireEvent.click(options.getByText(/nome de z - a/i));
		expect(store.getState().pokedex.order).toEqual(orderValues.NAME_DESC);
	});
});
