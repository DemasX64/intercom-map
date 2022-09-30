import styles from './placemark-info.module.css'
import CloseButton from '../close-button/close-button';
import { useDispatch, useSelector } from 'react-redux';
import { hideInfo } from '../../services/reducers/placemarkInfo';
import { useState } from 'react';

const PlacemarkInfo = () => {

  const dispatch = useDispatch()

  const [animation, setAnimation] = useState('appear')

    const closeInfo = async () => {
      setAnimation('disappear')
      await new Promise(r => setTimeout(r, 200))
      dispatch(hideInfo())
    }

    const code = useSelector((state) => state.placemarkInfo.code);

    return ( 
      <div className={`${styles.container} ${animation==='appear'?styles.appear:styles.disappear}`}>
        <p className={styles.code}>{code}</p>
        <div className={styles.icon}>
          <CloseButton onClick={closeInfo} />
        </div>
      </div>
     );
}
 
export default PlacemarkInfo;