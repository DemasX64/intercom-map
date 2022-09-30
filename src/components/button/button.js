import styles from './button.module.css'

const Button = (props) => {

    const {onClick, icon, text} = props
    
    return (
        <div className={styles.button} onClick={onClick} >
            <img className={styles.icon} src={icon}/>
            <p className={styles.text}>{text}</p>
        </div> 
    );
}
 
export default Button;