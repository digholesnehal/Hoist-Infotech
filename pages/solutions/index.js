import styles from "../../styles/solutions.module.css";
import Head from 'next/head';

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Hoist Infotech Solutions</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="description" content="Hoist Infotech is the best indian IT service provider and does a perfect job of website development, website maintenance, mobile application development, website deployment by using various technologies as per project's and client's requirement." />
        <meta name="keywords" content="IT company, IT solutions, IT agency, IT company in India, IT company in Pune, IT venture, Best IT company, Best IT agency, Affordable IT company, Affordable IT agency, Website development company, Mobile application development" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div className={styles.slide_left}>
        <span className={styles.green_text}>#Solutions Coming Soon</span>
      </div>
    </>
  )
}