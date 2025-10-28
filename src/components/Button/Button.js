import styles from './Button.module.scss';


const Button = props => {
    return <button className={styles.button}>{props.placeholder}</button>
}

export default Button;