import { useDispatch, useSelector } from 'react-redux';
import { hideForm } from '../../services/reducers/addPlacemarkForm';
import AddButton from '../add-button/add-button';
import CloseButton from '../close-button/close-button';
import Intercom from '../intercom/intercom'
import TypeInput from '../type-input/type-input';
import styles from './add-placemark-form.module.css'

import { motion } from "framer-motion"


function AddPlacemarkForm() {

    const dispatch = useDispatch()

    const closeForm = async () => {
      dispatch(hideForm())
    }

    const coordinates = useSelector((state) => state.addPlacemarkForm.coordinates)

    return (
        <motion.div transition={{duration:0.2}}  initial={{ x: -500 }}
        animate={{ x:0 }} exit={{x:-500}} className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>Добавление нового кода</p>
                <CloseButton onClick={closeForm}/>
            </div>
            <div className={styles.input}>
                <p className={styles.input__title}>Координаты</p>
                <p className={styles.input__hint}>Нажмите на карту, чтобы добавить метку</p>
                <div className={styles.input__fields}>
                    <div className={styles.input__field}>
                        <p className={styles.input__text}>{coordinates[0]}</p>
                    </div>
                    <div className={styles.input__field}>
                        <p className={styles.input__text}>{coordinates[1]}</p>
                    </div>
                </div>
            </div>
            {/* <div className={styles.input}>
                <p className={styles.input__title}>Тип</p>
                <div className={styles.input__fields}>
                    <div className={styles.input__field}>
                        <p className={styles.input__text}>Парадная</p>
                    </div>
                    <div className={styles.input__field}>
                        <p className={styles.input__text}>Ворота</p>
                    </div>
                </div>
            </div> */}
            <TypeInput/>
            <Intercom/>
            <AddButton/>
        </motion.div>
     );
}

export default AddPlacemarkForm;