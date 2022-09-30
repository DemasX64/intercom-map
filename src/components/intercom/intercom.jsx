import IntercomDisplay from "./intercom-display/intercom-display";
import styles from './intercom.module.css'
import IntercomButton from "./intercom-button/intercom-button";
import enterIcon from '../../assets/icons/enter.svg'
import backIcon from '../../assets/icons/back.svg'

function Intercom() {
  return ( 
  <>
    <IntercomDisplay/>
    <div className={styles.keyboard}>
      <IntercomButton value='1'/>
      <IntercomButton value='2'/>
      <IntercomButton value='3'/>
      <IntercomButton icon={backIcon}/>
      <IntercomButton value='4'/>
      <IntercomButton value='5'/>
      <IntercomButton value='6'/>
      <IntercomButton value='В'/>
      <IntercomButton value='7'/>
      <IntercomButton value='8'/>
      <IntercomButton value='9'/>
      <IntercomButton value='*'/>
      <IntercomButton value='0'/>
      <IntercomButton value='#'/>
      <IntercomButton icon={enterIcon}/>
    </div>
  </>
  );
}

export default Intercom;