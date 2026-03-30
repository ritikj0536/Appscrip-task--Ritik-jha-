import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.content}>
        <div className={styles.item}>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.item}>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.item}>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
    </div>
  );
}