import Image from 'next/image';
import styles from '../styles/LandingMain.module.css';

export default function LandingMain() {
  return (
    <div className={styles.LandingMainContainer}>
      <div className={styles.LandingMainImg}>
        <Image src="/images/desktop/image-interactive.jpg" layout="fill" objectPosition="left" objectFit="contain" alt="interactive" />
      </div>
      <div className={styles.LandingMainDetails}>
        <div className={styles.LandingMainHeading}>
          The leader in interactive VR
        </div>
        <div className={styles.LandingMainData}>
          Founded in 2011, Loopstudios has been producing world-class virtual reality
          projects for some of the best companies around the globe. Our award-winning
          creations have transformed businesses through digital experiences that bind
          to their brand.

        </div>
      </div>
    </div>
  );
}
