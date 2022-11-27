import { Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteFilter } from '@/store/pokedexSlice';
import './FavoritesFilter.scss';

function FavoritesFilter() {
	const favoriteFilter = useSelector((state) => state.pokedex.favoriteFilter);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const {
			target: { checked },
		} = event;
		dispatch(updateFavoriteFilter(checked));
	};

	return (
		<div className="favoriteFilter__container">
			<h3>Filtrar Favoritos</h3>
			<Switch
				checked={favoriteFilter}
				className="favoriteFilter__switch"
				onChange={handleChange}
				inputProps={{ 'aria-label': 'fitrar favoritos' }}
			/>
		</div>
	);
}

export default FavoritesFilter;
