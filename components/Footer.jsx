import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import Navlist from './Navlist';

export default function Footer() {
  return (
    <div className={styles.FooterMainContainer}>
      <div className={styles.FooterContent}>
        <div className={styles.FooterContentLeft}>
          <div className={styles.FooterTitle}>
            loopstudios
          </div>
          <div className={styles.FooterNavList}>
            <Navlist type="Footer" />
          </div>
        </div>
        <div className={styles.FooterConterRight}>
          <div className={styles.FooterIconsContainer}>
            <div className={styles.IconContainer}>
              <Image src="/images/icon-facebook.svg" alt="icon" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.IconContainer}>
              <Image src="/images/icon-twitter.svg" alt="icon" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.IconContainer}>
              <Image src="/images/icon-pinterest.svg" alt="icon" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.IconContainer}>
              <Image src="/images/icon-instagram.svg" alt="icon" layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className={styles.FooterRights}>
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
