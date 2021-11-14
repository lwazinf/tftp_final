import styles from '../styles/Home.module.css'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Features from '../components/Features'

export default function Home() {

  const toggle = (e) =>  {
    blur = document.getElementById('blur');
    blur.classList.toggle('active');
  }

  return (
      <main className={styles.main}>
          <Hero />
          <Content />
          {/* <Blog /> */}
          {/* <Features /> */}
      </main>
  )
}
