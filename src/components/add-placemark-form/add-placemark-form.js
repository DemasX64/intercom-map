import { useDispatch, useSelector } from 'react-redux';
import { hideForm, setDisappear, showForm } from '../../services/reducers/addPlacemarkForm';
import AddButton from '../add-button/add-button';
import CloseButton from '../close-button/close-button';
import Intercom from '../intercom/intercom'
import TypeInput from '../type-input/type-input';
import styles from './add-placemark-form.module.css'

function AddPlacemarkForm() {

    const dispatch = useDispatch()

    const closeForm = async () => {
      dispatch(setDisappear());
      await new Promise(r => setTimeout(r, 200))

      dispatch(hideForm())
    }

    const coordinates = useSelector((state) => state.addPlacemarkForm.coordinates)

    const animation = useSelector((state) => state.addPlacemarkForm.animation )
    return (
        <div className={`${styles.container} ${animation==='appear'?styles.appear:styles.disappear}`}>
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
        </div>
     );
}

export default AddPlacemarkForm;