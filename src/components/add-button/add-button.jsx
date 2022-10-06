import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPlacemark, hideForm, showToast } from '../../services/reducers/addPlacemarkForm';
import { addPlacemarkToMap } from '../../services/reducers/placemarkInfo';
import styles from './add-button.module.css'

function AddButton() {
  const isLoading = useSelector((state) => state.addPlacemarkForm.requestLoading)
  const dispatch = useDispatch()
  const code = useSelector((state) => state.addPlacemarkForm.code)
  const pos = useSelector((state) => state.addPlacemarkForm.coordinates)

  const add = () => {
    dispatch(addPlacemark()).then(()=>{
      dispatch(addPlacemarkToMap())
  })
  }

  return ( 
  <div className={styles.container} onClick={add}>
    {!isLoading && <p className={styles.text}>Добавить</p> }
    {isLoading &&  <CircularProgress classname={styles.progress} style={{color:'#FFF'}}/> }
  </div> );
}

export default AddButton;