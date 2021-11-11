import styles from '../styles/Home.module.css'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Features from '../components/Features'

export default function Home() {

  return (
      <main className={styles.main}>
        <Hero />
        <Content />
        <Blog />
        <Features />
      </main>
  )
}
