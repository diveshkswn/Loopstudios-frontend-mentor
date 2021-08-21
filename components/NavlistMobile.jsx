import Image from 'next/image';
import styles from '../styles/NavlistMobile.module.css';
import Navlist from './Navlist';

export default function NavlistMobile({ setMobileNav }) {
  return (
    <div className={styles.NavListMobileContainer}>
      <div className={styles.NavlistHeader}>
        <div className={styles.HeaderTitle}>
          loopstudios
        </div>
        <div className={styles.NavlistCloseButton}>
          <Image src="/images/icon-close.svg" layout="fill" objectFit="contain" alt="close" />
        </div>
      </div>
      <div className={styles.NavlistContent}>
        <Navlist type="Footer" size="1.5rem" />
      </div>
    </div>
  );
}
