import styles from '../styles/Home.module.css'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Features from '../components/Features'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import { useEffect } from "react";
// import { getUsers } from "../utils/users";

export default function Home() {

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
      <main className={styles.main}>
        <Hero />
        <Content />
        <Blog />
        <Features />
      </main>
  )
}
