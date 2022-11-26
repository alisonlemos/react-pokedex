import CategoriesFilter from './components/CategoriesFilter';
import FavoritesFilter from './components/FavoritesFilter';
import PokemonList from './components/PokemonList';
import './ContentMain.scss';

function ContentMain() {
	return (
		<section className="contentMain__section">
			<aside>
				<CategoriesFilter />
				<FavoritesFilter />
			</aside>
			<PokemonList />
		</section>
	);
}

export default ContentMain;
