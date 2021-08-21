/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import Image from 'next/image';
import styles from '../styles/Hamburger.module.css';

export default function Hamburger({ setMobileNav }) {
  return (
    <div className={styles.hamburgerImg} onClick={() => { setMobileNav((v) => !v); }}>
      <Image src="/images/icon-hamburger.svg" layout="fill" objectFit="contain" alt="hamburger" />
    </div>
  );
}
