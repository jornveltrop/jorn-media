import PropTypes from 'prop-types';
import iconStyles from './icon.module.css'
import Hamburger from '../Icons/Hamburger';
import ScrollDown from '../Icons/ScrollDown';
import Video from '../Icons/Video';
import Website from '../Icons/Website';
import Concept from '../Icons/Concept';
import Design from '../Icons/Design';
import ArrowUp from '../Icons/ArrowUp';

interface IconsObject {
    [key: string]: JSX.Element
}

const Icon = ({ icon = 'hamburger' }) => {
	const icons: IconsObject = {
		hamburger: <Hamburger />,
		video: <Video />,
		website: <Website />,
		concept: <Concept />,
		design: <Design />,
		scrollDown: <ScrollDown />,
		arrowUp: <ArrowUp />
	};

	return <span className={`${iconStyles[icon]} icon`}>{icons[icon]}</span>;
};

Icon.propTypes = {
	icon: PropTypes.string,
};

export default Icon;