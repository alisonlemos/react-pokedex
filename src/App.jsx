import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoading, updateCategoriesList } from './store/pokedexSlice';
import Loading from './common/Loading';
import { getPokemonList } from './services';
import './App.scss';

function App() {
	const dispatch = useDispatch();
	const [originalPokemonList, setOriginalPokemonList] = useState([]);

	const fetchData = useCallback(async () => {
		dispatch(toggleLoading(true));
		const data = await getPokemonList();
		setOriginalPokemonList(data);
	}, [dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	useEffect(() => {
		if (originalPokemonList.length) {
			const categories = [...originalPokemonList].flatMap(
				(pokemon) => pokemon.type
			);
			const uniqueCategories = [...new Set(categories)];
			dispatch(updateCategoriesList(uniqueCategories));
		}
	}, [originalPokemonList, dispatch]);

	return (
		<div className="App">
			<Loading />
		</div>
	);
}

export default App;
