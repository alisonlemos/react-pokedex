import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	toggleLoading,
	updateCategoriesList,
	updatePokemonList,
} from './store/pokedexSlice';
import ContentHeader from './components/ContentHeader';
import ContentMain from './components/ContentMain';
import Header from './components/Header';
import Loading from './common/Loading';
import { getPokemonList } from './services';
import './App.scss';

function App() {
	const searchKey = useSelector((state) => state.pokedex.searchKey);
	const order = useSelector((state) => state.pokedex.order);
	const categoriesList = useSelector((state) => state.pokedex.categoriesList);
	const categoriesFilter = useSelector(
		(state) => state.pokedex.categoriesFilter
	);
	const favoriteFilter = useSelector((state) => state.pokedex.favoriteFilter);
	const favoriteList = useSelector((state) => state.pokedex.favoriteList);

	const dispatch = useDispatch();
	const [originalPokemonList, setOriginalPokemonList] = useState([]);

	const fetchData = useCallback(async () => {
		dispatch(toggleLoading(true));
		const data = await getPokemonList();
		setOriginalPokemonList(data);
	}, [dispatch]);

	const filterBySearchKey = useCallback((searchKey, pokemonList) => {
		return pokemonList.filter(
			(item) =>
				item?.name.toLowerCase().includes(searchKey) ||
				item?.national_number.toLowerCase().includes(searchKey)
		);
	}, []);

	const filterByCategory = useCallback((filteredData, categoriesFilter) => {
		if (!categoriesFilter.length) {
			return filteredData;
		}
		return filteredData.filter((item) =>
			item.type.some((type) => categoriesFilter.includes(type))
		);
	}, []);

	const orderPokemonList = useCallback((order, pokemonList) => {
		const compareFunction = (a, b) => {
			return a[order.attribute] < b[order.attribute] ? -1 : 1;
		};
		return [...pokemonList].sort((a, b) =>
			order.type === 'asc' ? compareFunction(a, b) : compareFunction(b, a)
		);
	}, []);

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

	useEffect(() => {
		if (categoriesList.length) {
			dispatch(toggleLoading(true));

			const data = favoriteFilter ? favoriteList : originalPokemonList;
			const filteredData = filterBySearchKey(searchKey, data);
			const filteredByCategoryData = filterByCategory(
				filteredData,
				categoriesFilter
			);
			const orderedData = orderPokemonList(order, filteredByCategoryData);
			dispatch(updatePokemonList(orderedData));
			setTimeout(() => {
				dispatch(toggleLoading(false));
			}, 1000);
		}
	}, [
		order,
		searchKey,
		categoriesFilter,
		categoriesList,
		favoriteFilter,
		favoriteList,
		originalPokemonList,
		dispatch,
		filterBySearchKey,
		filterByCategory,
		orderPokemonList,
	]);

	return (
		<div className="App">
			<Header />
			<main>
				<ContentHeader />
				<ContentMain />
			</main>
			<Loading />
		</div>
	);
}

export default App;
