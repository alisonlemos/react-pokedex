import axios from 'axios';
import { mockedPokemonList } from '@/testUtils';
import { getPokemonList } from './index';

describe('Serviço para chamadas HTTP', () => {
	it('metodo getPokemonList deve realizar uma chamada get ao axios e retornar a lista de pokemons', async () => {
		await axios.get.mockResolvedValue(mockedPokemonList);
		const {
			data: { results },
		} = mockedPokemonList;
		const list = await getPokemonList();
		expect(list).toEqual(results);
	});
});
