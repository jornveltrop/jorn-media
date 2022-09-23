import PropTypes from 'prop-types';
import icon_styles from './Icon.module.css'
import Hamburger from '../Icons/Hamburger';
import Scroll_down from '../Icons/Scroll_down';

interface IconsObject {
    [key: string]: JSX.Element
}

const Icon = ({ icon = 'hamburger' }) => {
	const icons: IconsObject = {
		hamburger: <Hamburger/>,
		scroll_down: <Scroll_down />
	};

	return <span className={`${icon_styles[icon]} icon`}>{icons[icon]}</span>;
};

Icon.propTypes = {
	icon: PropTypes.string,
};

export default Icon;