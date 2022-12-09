import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styles from './type-input.module.css';
import { changeType } from '../../services/reducers/addPlacemarkForm';

const TypeInput = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.addPlacemarkForm.type);

  const setType = (value) => {
    dispatch(changeType(value));
  };

  return (
    <div className={styles.input}>
      <p className={styles.input__title}>Тип</p>
      <div className={styles.input__fields}>
        <button type="button" className={`${styles.input__field} ${type === 'Парадная' ? styles.active : ''}`} onClick={() => setType('Парадная')}>
          <p className={`${styles.input__text} ${type === 'Парадная' ? styles.active : ''}`}>Парадная</p>
        </button>
        <button type="button" className={`${styles.input__field} ${type === 'Ворота' ? styles.active : ''}`} onClick={() => setType('Ворота')}>
          <p className={`${styles.input__text} ${type === 'Ворота' ? styles.active : ''}`}>Ворота</p>
        </button>
      </div>
    </div>
  );
};

export default TypeInput;
