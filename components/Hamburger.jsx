import Image from 'next/image';
import styles from '../styles/Hamburger.module.css';

export default function Hamburger({ setMobileNav }) {
  return (
    <div className={styles.hamburgerImg}>
      <Image src="/images/icon-hamburger.svg" layout="fill" objectFit="contain" alt="hamburger" />
    </div>
  );
}
