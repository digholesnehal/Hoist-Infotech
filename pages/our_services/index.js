import styles from "../../styles/our_services.module.css";
import Head from 'next/head';

export default function OurServices() {
  return (
    <>
      <Head>
        <title>Hoist Infotech - Our Services</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="description" content="Hoist Infotech has a in house team of experienced developers, and are dedicated to deliver a pixel perfect and perfectly functional, QA tested;  websites, mobile apps, hybrid apps, PWAs, android apps, IOS apps, etc." />
        <meta name="keywords" content="IT venture, IT solutions, IT agency, IT company in India, Software solutions, Software development, Best software development, Best application developer, Best development team, Frontend development, backend development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.slide_left}>
        <span className={styles.green_text}>#Our_Services Coming Soon</span>
      </div>
    </>
  )
}