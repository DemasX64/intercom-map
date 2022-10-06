import { Circle } from 'rc-progress';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast, setToastDisappear } from '../../services/reducers/addPlacemarkForm';
import styles from './toast.module.css'

function Toast(props) {
  const dispatch = useDispatch()
  const [percent, setPercent] = useState(100)

  

  const animation = useSelector((state) => state.addPlacemarkForm.toastAnimation)
  useEffect(() => {
    let timer = setInterval(() => {
      setPercent((percent) => {
      if(percent > 0) {
       return percent - 1
      } else {
        //clearInterval(timer)
        //dispatch(setToastDisappear())
        //await new Promise(r => setTimeout(r, 200))
        dispatch(hideToast())
        return 0
      }})
  }, 20);

  return () => clearInterval(timer)
  }, []);


  return (
    <div className={`${styles.toast} ${animation==='appear'?styles.appear:styles.disappear}`}>
      <p className={styles.text}>Успешно добавлено! 👍</p>
      <div className={styles.icon}>
        <Circle style={{height:24}}percent={percent} strokeWidth={18} strokeColor="#DAD9D9" trailColor='#FFF'/> 
      </div>
    </div>
  );
}

export default Toast;