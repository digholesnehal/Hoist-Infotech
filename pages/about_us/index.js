import styles from "../../styles/about_us.module.css";
import Head from 'next/head';

export default function AboutUs() {
  return (<>
    <Head>
      <title>Hoist Infotech - About US</title>
      <link rel="shortcut icon" href="/assets/favicon.ico" />
      <meta name="description" content="Hoist Infotech is an IT company and offers IT services at very reasonable prices even to the international clients, since they are willing to increase a list of happy customers instead of focusing on heavy profits." />
      <meta name="keywords" content="Best IT development company, IT service provider, Information technology, Software company, IT business, IT firm" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={styles.slide_left}>
      <span className={styles.green_text}>#About_Us Coming Soon</span>
    </div>
  </>
  )
}