import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className={styles.MainContainer}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <div className={styles.Content}>

        {children}
      </div>

      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
