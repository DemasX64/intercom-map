import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './placemark-info.module.css';
import CloseButton from '../close-button/close-button';
import { hideInfo } from '../../services/reducers/placemarkInfo';

const PlacemarkInfo = () => {
  const dispatch = useDispatch();

  const closeInfo = async () => {
    dispatch(hideInfo());
  };

  const code = useSelector((state) => state.placemarkInfo.code);

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}
      className={styles.container}
    >
      <p className={styles.code}>{code}</p>
      <div className={styles.icon}>
        <CloseButton onClick={closeInfo} />
      </div>
    </motion.div>
  );
};

export default PlacemarkInfo;
