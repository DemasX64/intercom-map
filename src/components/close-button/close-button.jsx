import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../../assets/icons/close.svg';
import styles from './close-button.module.css';

const CloseButton = (props) => {
  const { onClick } = props;

  return (
    <button type="button" className={styles.container} onClick={() => onClick()}>
      <img className={styles.icon} src={closeIcon} alt="Закрыть" />
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
