import { renderWithProviders } from '@/testUtils';
import Header from './Header';

describe('Componente Header', () => {
	it('deve renderizar o componente de acordo com o snapshot', () => {
		expect(renderWithProviders(<Header />)).toMatchSnapshot();
	});
});
