import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as PokeballLogo } from '../../assets/images/pokeball.svg';
import { ReactComponent as SinviaLogo } from '../../assets/images/synvia-A.svg';
import './Header.scss';
function Header() {
	return (
		<header className="pokedex__header">
			<div className="header__title">
				<PokeballLogo />
				<h1>Pokédex</h1>
			</div>
			<div className="header__actions">
				<SinviaLogo />
				<FontAwesomeIcon icon={faRightFromBracket} />
			</div>
		</header>
	);
}

export default Header;
