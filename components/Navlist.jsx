/* eslint-disable @next/next/no-html-link-for-pages */
import styles from '../styles/Navlist.module.css';

export default function Navlist({ type }) {
  return (
    <div className={`${styles.NavlistMainContainer} ${type === 'Footer' ? styles.flexChange : ''}`}>
      <a href="/" className={styles.NavlistContent}><span>About</span></a>
      <div className={styles.NavlistContent}><span>Careers</span></div>
      <div className={styles.NavlistContent}><span>Events</span></div>
      <div className={styles.NavlistContent}><span>Products</span></div>
      <div className={styles.NavlistContent}><span>Support</span></div>
    </div>
  );
}
