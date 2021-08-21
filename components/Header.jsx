import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Navlist from './Navlist';

export default function Header() {
  return (
    <div className={styles.HeaderMainContainer}>

      <Image src="/images/desktop/image-hero.jpg" layout="fill" objectPosition="top" objectFit="cover" alt="Hero Image" />

      <div className={styles.HeaderContent}>
        <div className={styles.HeaderBar}>
          <div className={styles.HeaderTitle}>
            loopstudios
          </div>
          <div className={styles.HeaderNavList}>
            <Navlist />
          </div>
        </div>
        <div className={styles.HeaderSlogan}>
          Immersive experiences that deliver
        </div>
      </div>
    </div>
  );
}
