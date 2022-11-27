import { renderWithProviders } from '@/testUtils';
import ContentMain from './ContentMain';

describe('Componente ContentMain', () => {
	it('deve renderizar o componente de acordo com o snapshot', () => {
		expect(renderWithProviders(<ContentMain />)).toMatchSnapshot();
	});
});
