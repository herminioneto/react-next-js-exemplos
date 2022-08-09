import styles from "./Button.module.css"

function Button ({ children, onClick }) {

  /* Lembrando que podemos passar como parâmetro tanto o props,
    e usar o props.children, quanto o destructor. Nesse caso, vamos
    usar o destructor.
  */

  return (
    <button 
      className={styles.button}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button