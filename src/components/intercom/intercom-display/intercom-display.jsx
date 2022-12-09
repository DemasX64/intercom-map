import { useSelector } from 'react-redux';
import React from 'react';
import styles from './intercom-display.module.css';

const IntercomDisplay = () => {
  const code = useSelector((state) => state.addPlacemarkForm.code);

  return (
    <div className={styles.container}>
      <p className={styles.text}>{code}</p>
    </div>
  );
};

export default IntercomDisplay;
