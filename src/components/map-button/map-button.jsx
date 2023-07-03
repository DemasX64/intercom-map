import React from 'react';
import PropTypes from 'prop-types';
import styles from './map-button.module.css';

const MapButton = (props) => {
  const {
    icon, onClick, onMouseEnter, onMouseLeave,
  } = props;

  return (
    <button type="button" className={styles.container} onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()} onClick={() => onClick()}>
      <img src={icon} className={styles.icon} alt="" />
    </button>
  );
};
MapButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

MapButton.defaultProps = {
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default MapButton;
