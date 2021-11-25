import styles from "../styles/Home.module.css";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Features from "../components/Features";
import Landing from "../components/Landing";
import BlogPics from "../components/BlogPics";
import { CommentForm } from "../components/CTAction";
import InputSection from "../components/InputSection";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Hero />
        <Landing />
        {/* <Content /> */}
          <Blog />
          <InputSection />
        <Features />
      </main>
    </div>
  );
}
