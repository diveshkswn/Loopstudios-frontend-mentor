import Image from 'next/image';
import styles from '../styles/CreationCard.module.css';

export default function CreationCard({ name, imgURL }) {
  return (
    <div className={styles.CreationCardContainer}>
      <Image src={imgURL} layout="fill" alt="Creationcard" objectFit="fill" />
      <div className={styles.CreationCardHeader}>
        {name}
      </div>
    </div>
  );
}
