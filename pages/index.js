import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Content from '../components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ten Flags Theme Park</title>
        <meta name="description" content="Welcome to the Ten Flags Theme Park website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Hero />
        <Content />
      </main>

    </div>
  )
}
