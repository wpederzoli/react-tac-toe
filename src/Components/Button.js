import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label }) => {
    return <button>{label}</button>;
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
};

Button.defaultProps = {
    label: 'Default',
};

export default Button;
