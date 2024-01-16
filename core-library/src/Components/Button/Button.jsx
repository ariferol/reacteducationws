import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({title, onClicked}) => {
    return(
        <button className={styles.Button} type="button" onClick={onClicked}>{title}</button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClicked: PropTypes.func.isRequired
};

Button.defaultProps = {
    title: "{button title}",
    onClicked: () => {}
};

export default Button;