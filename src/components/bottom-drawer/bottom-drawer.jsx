import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import styles from './bottom-drawer.module.css';
import { hideFAQ, showFAQ } from '../../services/reducers/faq';

const BottomDrawer = (props) => {
  const [offset, setOffset] = useState(0);
  const bind = useDrag((state) => swipe(state), {});
  const { children } = props;
  const { container, content } = styles;

  const dispatch = useDispatch();

  const swipe = (state) => {
    if (state.direction[1]) {
      setOffset(parseInt(state.movement[1]));
    }
    if (state.direction[1] === 1 && state.movement[1] > 70) {
      close();
    }
    if (state.last) {
      setOffset(0);
    }
  };
  const close = () => {
    dispatch(hideFAQ());
  };
  const click = () => {
    close();
  };

  return (
    <div className={container} onClick={click}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        transition={{ duration: offset === 0 ? 0.2 : 0 }}
        initial={{ y: 200 }}
        animate={{ y: offset >= 0 ? offset : 0 }}
        exit={{ y: 200 }}
        className={styles.bottom} {...bind()} 
      >
        <div className={styles.divider} />
        <div className={content}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default BottomDrawer;
