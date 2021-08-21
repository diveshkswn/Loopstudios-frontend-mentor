import { useEffect, useState } from 'react';
import styles from '../styles/CreationList.module.css';
import CreationCard from './CreationCard';

export default function CreationList() {
  const [creationdata, setCreationData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/ourcreations');
      const data = await res.json();
      setCreationData(data);
    }
    fetchData();
  }, []);

  function populateCreationList(eachCard) {
    return (
      <CreationCard
        key={eachCard.id}
        name={eachCard.name}
        imgURL={eachCard.imgURL}
      />
    );
  }

  return (
    <div className={styles.CreationListMainContainer}>
      <div className={styles.CreationListHeader}>
        <div className={styles.CreationListHeading}>
          Our Creations
        </div>
        <div className={styles.CreationListButton}>
          <span>See All</span>
        </div>
      </div>
      <div className={styles.CreationListContent}>
        {creationdata.length > 0 && creationdata.map(populateCreationList)}
      </div>
      <div className={styles.CreationListButton2}>
        <span>See All</span>
      </div>
    </div>
  );
}
