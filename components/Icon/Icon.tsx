import PropTypes from 'prop-types';
import Hamburger from '../Icons/Hamburger';
import Test from '../Icons/Test';

interface IconsObject {
    [key: string]: JSX.Element
}

const Icon = ({ icon = 'hamburger' }) => {
	const icons: IconsObject = {
		hamburger: <Hamburger/>,
        test: <Test />
	};

	return <span className="icon">{icons[icon]}</span>;
};

Icon.propTypes = {
	icon: PropTypes.string,
};

export default Icon;