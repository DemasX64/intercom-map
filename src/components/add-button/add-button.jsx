import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addPlacemark } from '../../services/reducers/addPlacemarkForm';
import { addPlacemarkToMap } from '../../services/reducers/placemarkInfo';
import styles from './add-button.module.css';

const AddButton = () => {
  const isLoading = useSelector((state) => state.addPlacemarkForm.requestLoading);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addPlacemark()).then(() => {
      dispatch(addPlacemarkToMap());
    });
  };

  return (
    <button type="submit" className={styles.container} onClick={add}>
      {!isLoading && <p className={styles.text}>Добавить</p> }
      {isLoading && <CircularProgress classname={styles.progress} style={{ color: '#FFF' }} /> }
    </button>
  );
};

export default AddButton;
