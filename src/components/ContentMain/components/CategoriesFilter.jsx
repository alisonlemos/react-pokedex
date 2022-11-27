import { Chip } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';

import { updateCategoriesFilter } from '@/store/pokedexSlice';
import './CategoriesFilter.scss';

function CategoriesFilter() {
	const categoriesList = useSelector((state) => state.pokedex.categoriesList);
	const categoriesFilter = useSelector(
		(state) => state.pokedex.categoriesFilter
	);
	const dispatch = useDispatch();

	const handleClick = (category) => {
		dispatch(updateCategoriesFilter(category));
	};

	const isSelected = (category) => {
		return categoriesFilter.some((filterItem) => filterItem === category);
	};

	return (
		<div className="categoriesFilter__container">
			<h3>Filtrar por tipo</h3>
			{categoriesList?.map((category) => {
				return (
					<Chip
						className={`categoryFilter__item ${
							isSelected(category) ? 'categoryFilter__item__selected' : ''
						}`}
						key={category}
						onClick={() => handleClick(category)}
						onDelete={isSelected(category) ? handleClick : null}
						deleteIcon={
							isSelected(category) ? (
								<FontAwesomeIcon
									className="categoryFilter__item__icon"
									icon={faCheck}
								/>
							) : null
						}
						label={category}
					/>
				);
			})}
		</div>
	);
}

export default CategoriesFilter;
