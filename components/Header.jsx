import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Navlist from './Navlist';
import useWindowDimensions from '../utils/useWindowDimensions';
import Hamburger from './Hamburger';
import NavlistMobile from './NavlistMobile';

export default function Header() {
  const { width } = useWindowDimensions();
  const [mobileNav, setMobileNav] = useState(true);
  return (
    <div className={styles.HeaderMainContainer}>
      {mobileNav && (width < 700) && <NavlistMobile />}
      <Image src="/images/desktop/image-hero.jpg" layout="fill" objectPosition="top" objectFit="cover" alt="Hero Image" />

      <div className={styles.HeaderContent}>
        <div className={styles.HeaderBar}>
          <div className={styles.HeaderTitle}>
            loopstudios
          </div>
          <div className={width > 700 && styles.HeaderNavList}>
            {width && width > 700 ? <Navlist /> : <Hamburger />}
          </div>
        </div>
        <div className={styles.HeaderSlogan}>
          Immersive experiences that deliver
        </div>
      </div>
    </div>
  );
}
