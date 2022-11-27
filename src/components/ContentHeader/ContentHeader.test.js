import { renderWithProviders } from '@/testUtils';
import ContentHeader from './ContentHeader';

describe('Componente ContentHeader', () => {
	it('deve renderizar o componente de acordo com o snapshot', () => {
		expect(renderWithProviders(<ContentHeader />)).toMatchSnapshot();
	});
});
