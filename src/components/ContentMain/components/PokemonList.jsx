import { IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';

import { updateFavoriteList } from '@/store/pokedexSlice';
import AsyncImage from './AsyncImage';

import './PokemonList.scss';

function PokemonList() {
	const pokemonList = useSelector((state) => state.pokedex.pokemonList);
	const favoriteList = useSelector((state) => state.pokedex.favoriteList);
	const dispatch = useDispatch();

	const updateFavorites = (pokemon) => {
		dispatch(updateFavoriteList(pokemon));
	};

	const isFavoriteItem = (pokemon) => {
		return favoriteList.some(
			(favoriteItem) => favoriteItem.national_number === pokemon.national_number
		);
	};

	return (
		<div className="pokemonList__container">
			{pokemonList?.map((pokemon) => {
				return (
					<div key={pokemon.national_number} className="pokemonList__item">
						<div className="item__imgContainer">
							<IconButton
								name="favorite-button"
								aria-label="filtro de busca por texto"
								className={`item__favoriteIcon ${isFavoriteItem(pokemon) ? 'item__favorited' : ''
									}`}
								onClick={() => updateFavorites(pokemon)}
								edge="end"
							>
								<FontAwesomeIcon
									icon={isFavoriteItem(pokemon) ? faHeartSolid : faHeart}
								/>
							</IconButton>
							<AsyncImage
								src={pokemon.sprites.large}
								alt={pokemon.name}
							/>
						</div>
						<span className="item__national_number">
							Nº {pokemon.national_number}
						</span>
						<span className="item__name">{pokemon.name}</span>
						<div className="item__types">
							{pokemon.type.map((item) => {
								return (
									<div
										key={`${pokemon.name}${item}`}
										className={`types__chip__${item.toLowerCase()}`}
									>
										{item}
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PokemonList;
