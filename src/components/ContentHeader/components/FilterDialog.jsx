import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faClose } from '@fortawesome/free-solid-svg-icons';

import CategoriesFilter from '@/components/ContentMain/components/CategoriesFilter';
import FavoritesFilter from '@/components/ContentMain/components/FavoritesFilter';
import { resetFilters } from '@/store/pokedexSlice';

import './FilterDialog.scss';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});


function FilterDialog() {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clearFilters = () => {
        dispatch(resetFilters(true));
        handleClose()
    };

    return (
        <div className="filterDialog">
            <Button variant="outlined" color="error" onClick={handleClickOpen}>
                Filtros
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar color='transparent' sx={{ position: 'relative' }}>
                    <Toolbar className="filterDialog__toolbar">
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </IconButton>
                        <div className="filterDialog__actions">
                            <Button
                                autoFocus
                                aria-label="close"
                                color="error"
                                variant="outlined"
                                onClick={clearFilters}
                                endIcon={
                                    <FontAwesomeIcon icon={faTrash} />
                                }
                            >
                                Limpar Filtros
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className="filterDialog__content">
                    <CategoriesFilter />
                    <FavoritesFilter />

                </div>
            </Dialog>
        </div>

    );
}

export default FilterDialog;
