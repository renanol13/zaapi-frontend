import styles from './ButtonForm.module.css'

const ButtonForm  = ({handleClick, text}) => {
return (
    <button onClick={()=> handleClick()} className={styles.button}>
        {text}
    </button>
)}

export default ButtonForm;