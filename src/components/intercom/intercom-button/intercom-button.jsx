import { useDispatch } from 'react-redux'
import { addChar, removeChar } from '../../../services/reducers/addPlacemarkForm'
import styles from './intercom-button.module.css'

function IntercomButton(props) {

  const dispatch = useDispatch()
  const {value, icon} =  props

  const onClick = () => {
    if (value) {
      dispatch(addChar(value))
    }
    else {
      dispatch(removeChar())
    }
  }

  return ( 
  <div className={styles.container} onClick={onClick}>
    {value && <p className={styles.key}>{value}</p>}
    {icon && <img className={styles.icon} src={icon}/>}
  </div> );
}

export default IntercomButton;