import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { addChar, removeChar } from '../../../services/reducers/addPlacemarkForm';
import styles from './intercom-button.module.css';

const IntercomButton = (props) => {
  const dispatch = useDispatch();
  const { value, icon } = props;

  const onClick = () => {
    if (value) {
      dispatch(addChar(value));
    } else {
      dispatch(removeChar());
    }
  };

  return (
    <button type="button" className={styles.container} onClick={onClick}>
      {value && <p className={styles.key}>{value}</p>}
      {icon && <img className={styles.icon} src={icon} alt="" />}
    </button>
  );
};

IntercomButton.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.node,
};

IntercomButton.defaultProps = {
  value: '',
  icon: null,
};

export default IntercomButton;
