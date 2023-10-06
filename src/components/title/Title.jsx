import styles from './Tittle.module.css'

function Tittle ({ children }) {
  return (
    <h1 className={styles.title}>{ children }</h1>
  )
}

export default Tittle