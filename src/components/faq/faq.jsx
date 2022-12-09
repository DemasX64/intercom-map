import styles from './faq.module.css'
import { motion} from 'framer-motion'

function FAQ() {
  return (
    <motion.div transition={{duration:0.2}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={`${styles.faqContainer} `}>
      <p className={styles.title}>Что это?</p>
      <p className={styles.text}>Это карта с кодами от домофонов</p>
      <p className={styles.text}>Свои пожелания можете отправить на почту 📬<br/><b>demasmamas@gmail.com</b></p>
    </motion.div> 
  );
}

export default FAQ;