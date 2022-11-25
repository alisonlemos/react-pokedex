import axios from 'axios';

const orderValues = {
	NATIONAL_NUMBER_ASC: {
		attribute: 'national_number',
		type: 'asc',
	},
	NATIONAL_NUMBER_DESC: {
		attribute: 'national_number',
		type: 'desc',
	},
	NAME_ASC: {
		attribute: 'name',
		type: 'asc',
	},
	NAME_DESC: {
		attribute: 'name',
		type: 'desc',
	},
};

const getPokemonList = async () => {
	const {
		data: { results },
	} = await axios.get(`https://unpkg.com/pokemons@1.1.0/pokemons.json`);
	const unique = [
		...new Map(results.map((item) => [item.national_number, item])).values(),
	];
	return unique;
};

export { getPokemonList, orderValues };
