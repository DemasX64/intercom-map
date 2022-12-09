import { Circle } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { hideToast } from '../../services/reducers/addPlacemarkForm';
import styles from './toast.module.css';

const Toast = () => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        // clearInterval(timer)
        // dispatch(setToastDisappear())
        // await new Promise(r => setTimeout(r, 200))
        dispatch(hideToast());
        return 0;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -200 }}
      className={styles.toast}
    >
      <p className={styles.text}>Успешно добавлено! 👍</p>
      <div className={styles.icon}>
        <Circle style={{ height: 24 }} percent={percent} strokeWidth={18} strokeColor="#DAD9D9" trailColor="#FFF" />
      </div>
    </motion.div>
  );
};

export default Toast;
