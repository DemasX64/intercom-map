import { useSelector } from 'react-redux';
import styles from './faq.module.css'

function FAQ() {

  const animation = useSelector((state) => state.faq.animation)
  return (
    <div className={`${styles.faqContainer} ${animation==='appear'?styles.appear:styles.disappear}`}>
      <p className={styles.title}>Что это?</p>
      <p className={styles.text}>Это карта с кодами от домофонов</p>
      <p className={styles.text}>Свои пожелания можете отправить на почту 📬<br/><b>demasmamas@gmail.com</b></p>
    </div> 
  );
}

export default FAQ;