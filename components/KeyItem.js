import styles from './KeyItem.module.css'

export default function KeyItem({ children }) {
  return (
    <>
      <div className={styles.container}>{ children }</div>
    </>
  )
}
