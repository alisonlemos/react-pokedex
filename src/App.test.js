import axios from 'axios';
import { mockedPokemonList, renderWithProviders } from './testUtils';
import { act } from '@testing-library/react';
import App from './App';

describe('Componente principal da aplicação', () => {
	it('renderiza corretamente o componente', async () => {
		await axios.get.mockReturnValue(mockedPokemonList);
		// eslint-disable-next-line testing-library/no-unnecessary-act
		await act(async () => {
			expect(renderWithProviders(<App />)).toMatchSnapshot();
		});
	});
});
