import styles from '../styles/Navlist.module.css';

export default function Navlist() {
  return (
    <div className={styles.NavlistMainContainer}>
      <div className={styles.NavlistContent}><span>About</span></div>
      <div className={styles.NavlistContent}><span>Careers</span></div>
      <div className={styles.NavlistContent}><span>Events</span></div>
      <div className={styles.NavlistContent}><span>Products</span></div>
      <div className={styles.NavlistContent}><span>Support</span></div>
    </div>
  );
}
