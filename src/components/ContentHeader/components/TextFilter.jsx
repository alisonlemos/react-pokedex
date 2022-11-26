import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchKey } from '../../../store/pokedexSlice';
import './TextFilter.scss';

function TextFilter() {
	const [searchKey, setSearchKey] = useState('');
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setSearchKey(event.target.value);
	};

	const submitSearchKey = useCallback(() => {
		dispatch(updateSearchKey(searchKey));
	}, [dispatch, searchKey]);

	const handleUserKeyPress = useCallback(
		(event) => {
			const { keyCode } = event;
			if (keyCode === 13) {
				submitSearchKey();
			}
		},
		[submitSearchKey]
	);

	useEffect(() => {
		window.addEventListener('keydown', handleUserKeyPress);
		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	return (
		<FormControl className="textFilter__container" variant="outlined">
			<OutlinedInput
				type="text"
				value={searchKey}
				onChange={handleChange}
				className="textFilter__input"
				placeholder="Pesquise por nome ou número"
				fullWidth
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="filtro de busca por texto"
							className="textFilter__icon"
							onClick={submitSearchKey}
							edge="end"
						>
							<FontAwesomeIcon icon={faSearch} />
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
}

export default TextFilter;
