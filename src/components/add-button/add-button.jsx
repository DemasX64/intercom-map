import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addPlacemark } from '../../utils/map-api';
import { addPlacemarkToMap } from '../../services/reducers/placemarkInfo';
import styles from './add-button.module.css';

const AddButton = () => {
  const isLoading = useSelector((state) => state.addPlacemarkForm.requestLoading);
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.addPlacemarkForm.coordinates);
  const code = useSelector((state) => state.addPlacemarkForm.code);
  const type = useSelector((state) => state.addPlacemarkForm.type);

  const add = async () => {
    const data = {
      lat: coordinates[0],
      lng: coordinates[1],
      code,
      type,
    };
    console.log(data);
    const result = await dispatch(addPlacemark(data));
    if (result.type === addPlacemark.fulfilled.type) {
      dispatch(addPlacemarkToMap(result.payload));
    }
  };

  return (
    <button type="submit" className={styles.container} onClick={add}>
      {!isLoading && <p className={styles.text}>Добавить</p> }
      {isLoading && <CircularProgress className={styles.progress} style={{ color: '#FFF' }} /> }
    </button>
  );
};

export default AddButton;
