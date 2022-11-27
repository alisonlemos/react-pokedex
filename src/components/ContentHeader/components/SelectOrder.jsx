import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateOrder } from '@/store/pokedexSlice';
import { orderValues } from '@/services';
import './SelectOrder.scss';

function SelectOrder() {
	const [option, setOption] = useState('NATIONAL_NUMBER_ASC');
	const dispatch = useDispatch();

	const orderOptions = [
		{
			label: 'Menor número primeiro',
			value: 'NATIONAL_NUMBER_ASC',
		},
		{
			label: 'Maior número primeiro',
			value: 'NATIONAL_NUMBER_DESC',
		},
		{
			label: 'Nome de A - Z',
			value: 'NAME_ASC',
		},
		{
			label: 'Nome de Z - A',
			value: 'NAME_DESC',
		},
	];

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setOption(value);
		dispatch(updateOrder(orderValues[value]));
	};

	return (
		<FormControl className="pokedex__selectOrder" variant="outlined">
			<label htmlFor="select-order">Ordenar por </label>
			<Select
				size="small"
				id="select-order"
				value={option}
				onChange={handleChange}
				displayEmpty
			>
				{orderOptions.map((option) => {
					return (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
}

export default SelectOrder;
