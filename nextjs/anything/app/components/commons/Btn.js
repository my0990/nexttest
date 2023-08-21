import styles from "./Btn.module.css"

export default function Btn({children, ...rest}){
    return(
        <button 
        {...rest}
        className={styles.btn}
        >
            {children}
        </button>
    )
}