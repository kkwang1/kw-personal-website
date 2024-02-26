import styles from './IconItem.module.css'

export default function IconItem({ src, alt, emoji, children }) {
  return (
    <>
    <div className={styles.container}>
      {emoji == "" ?
      <img src={ src } alt={ alt } className={styles.icon} />
      :
      <p className={styles.icon}>{ emoji }</p>
      }
      <div className={styles.text}>{ children }</div>
    </div>
    </>
  )
}
