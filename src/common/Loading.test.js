import { renderWithProviders } from '../testUtils';
import Loading from './Loading';

describe('Componente Loading', () => {
	it('deve renderizar o componente de acordo com o snapshot', () => {
		expect(renderWithProviders(<Loading />)).toMatchSnapshot();
	});
});
