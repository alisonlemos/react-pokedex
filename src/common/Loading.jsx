import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';

function Loading() {
	const loading = useSelector((state) => state.pokedex.loading);

	return (
		<div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				Carregando...
			</Backdrop>
		</div>
	);
}
export default Loading;
