import styles from './map-button.module.css'

function MapButton(props) {

  const {icon, onClick, onMouseEnter, onMouseLeave} = props;

  return ( 
    <div className={styles.container} onMouseEnter={()=>onMouseEnter()} onMouseLeave={()=>onMouseLeave()} onClick={()=>onClick()}>
      <img src={icon} className={styles.icon} alt=''/>
    </div>
  );
}

export default MapButton;