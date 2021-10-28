import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Food from '../components/Food'
import Events from '../components/Events'
import Accom from '../components/Accom'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Features from '../components/Features'

export default function Home() {
  return (
      <main className={styles.main}>
        <Hero />
        <Content />
        <Food />
        <Events />
        <Features />
        <Accom />
      </main>
  )
}
