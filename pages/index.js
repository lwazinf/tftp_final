import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Food from '../components/Food'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Features from '../components/Features'

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
        <Features />
        <Food />
      </main>

      <Footer />

    </div>
  )
}
