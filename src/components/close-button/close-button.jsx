import closeIcon from '../../assets/icons/close.svg'
import styles from './close-button.module.css'

function CloseButton(props) {

  const {onClick} = props

  return ( 
    <div className={styles.container} onClick={()=>onClick()}>
      <img className={styles.icon} src={closeIcon} alt='Закрыть'/>
    </div>
  );
}

export default CloseButton;