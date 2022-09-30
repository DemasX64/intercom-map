import { useDispatch } from 'react-redux';
import { hideForm, showToast } from '../../services/reducers/addPlacemarkForm';
import styles from './add-button.module.css'

function AddButton() {
  const dispatch = useDispatch()

  const add = () => {
    dispatch(showToast())
    dispatch(hideForm())
  }

  return ( 
  <div className={styles.container} onClick={add}>
    <p className={styles.text}>Добавить</p>
  </div> );
}

export default AddButton;