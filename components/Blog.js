import styles from "../styles/Blog.module.css";
import Food from "./Food";
import MyEvents from "./Events";
import Accom from "./Accom";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Element name="blog" className="element"></Element>
      <div className={styles._heading}>What&apos;s happening</div>
      <div className={styles._sub}>
        For those curious as to what we do at our Theme Park!
      </div>
      <Food />
      <MyEvents />
      <Accom />
    </div>
  );
};

export default Blog;
