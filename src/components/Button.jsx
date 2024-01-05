// Button.js
import PropTypes from "prop-types";
import "../App.css";

const Button = ({ label }) => {
	return (
		<button className="w-fit mx-auto button text-white border border-[#115267] rounded-full px-6 sm:px-10 md:px-8 lg:px-10 py-2 sm:py-3">
			{label}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Button;
