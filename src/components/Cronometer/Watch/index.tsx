import styles from './watch.module.scss'

export default function Watch() {
  return (
    <>
      <span className={styles.watchNumber}>0</span>
      <span className={styles.watchNumber}>0</span>
      <span className={styles.watchDivider}>:</span>
      <span className={styles.watchNumber}>0</span>
      <span className={styles.watchNumber}>0</span>
    </>
  );
}
