import PropTypes from 'prop-types';
import iconStyles from './icon.module.css'
import Hamburger from '../Icons/Hamburger';
import ScrollDown from '../Icons/ScrollDown';

interface IconsObject {
    [key: string]: JSX.Element
}

const Icon = ({ icon = 'hamburger' }) => {
	console.log
	const icons: IconsObject = {
		hamburger: <Hamburger />,
		scrollDown: <ScrollDown />
	};

	return <span className={`${iconStyles[icon]} icon`}>{icons[icon]}</span>;
};

Icon.propTypes = {
	icon: PropTypes.string,
};

export default Icon;