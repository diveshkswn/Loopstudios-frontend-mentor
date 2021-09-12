import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Navlist from './Navlist';
import useWindowDimensions from '../utils/useWindowDimensions';
import Hamburger from './Hamburger';
import NavlistMobile from './NavlistMobile';

export default function Header() {
  const { width } = useWindowDimensions();
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className={styles.HeaderMainContainer}>
      {/* mobileNav should be visible if width is less than 700 and mobileNav is true */}
      {mobileNav && (width < 700) && <NavlistMobile setMobileNav={setMobileNav} />}
      <Image src="/images/desktop/image-hero.jpg" layout="fill" objectPosition="top" objectFit="cover" alt="Hero Image" />

      <div className={styles.HeaderContent}>
        <div className={styles.HeaderBar}>
          <div className={styles.HeaderTitle}>
            loopstudios
          </div>
          <div className={width > 700 ? styles.HeaderNavList : ''}>
            {width && width > 700 ? <Navlist /> : <Hamburger setMobileNav={setMobileNav} />}
          </div>
        </div>
        <div className={styles.HeaderSlogan}>
          Immersive experiences that deliver
        </div>
      </div>
    </div>
  );
}
