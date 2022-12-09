import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = (props) => {
  const { onClick, icon, text } = props;

  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <img className={styles.icon} src={icon} alt="" />
      <p className={styles.text}>{text}</p>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
