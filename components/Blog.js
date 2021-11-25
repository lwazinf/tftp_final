import styles from "../styles/Blog.module.css";
import BlogPics from "./BlogPics";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useState } from "react";

const blogList = [
  {
    title: "SO MUCH TO EXPERIENCE",
    cover: ["/assets/cover_event.jpg", "-280px"],
    cover1: ["/assets/1_event.jpg", "-200px", "-40px", "", ""],
    cover2: ["/assets/2_event.jpg", "-260px", "-50px", "", ""],
    cover3: ["/assets/3_event.jpg", "-150px", "-25px", "", ""],
    bg: [
      "rgb(138, 201, 83)",
      "-moz-linear-gradient(37deg,rgba(138, 201, 83, 0.6936975473783263) 0%,rgba(0, 0, 0, 0) 65%",
      "-webkit-linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
      "linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%)",
      'progid:DXImageTransform.Microsoft.gradient(startColorstr="#8ac953",endColorstr="#000000",GradientType=1)',
    ],
  },
  {
    title: "TEASE YOUE TASTEBUDS",
    cover: ["/assets/cover_food.jpg", "-280px"],
    cover1: ["/assets/1_food.jpg", "-200px", "-40px", "", ""],
    cover2: ["/assets/2_food.jpg", "-260px", "-50px", "", ""],
    cover3: ["/assets/3_food.jpg", "-150px", "-25px", "", ""],
    bg: [
      "rgb(138, 201, 83)",
      "-moz-linear-gradient(37deg,rgba(138, 201, 83, 0.6936975473783263) 0%,rgba(0, 0, 0, 0) 65%",
      "-webkit-linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
      "linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%)",
      'progid:DXImageTransform.Microsoft.gradient(startColorstr="#8ac953",endColorstr="#000000",GradientType=1)',
    ],
  },
  {
    title: "WELCOME TO ELYSIUM",
    cover: ["/assets/cover_accom.jpg", "-280px"],
    cover1: ["/assets/1_accom.jpg", "-200px", "-40px", "", ""],
    cover2: ["/assets/2_accom.jpg", "-260px", "-50px", "", ""],
    cover3: ["/assets/3_accom.jpg", "-150px", "-25px", "", ""],
    bg: [
      "rgb(138, 201, 83)",
      "-moz-linear-gradient(37deg,rgba(138, 201, 83, 0.6936975473783263) 0%,rgba(0, 0, 0, 0) 65%",
      "-webkit-linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
      "linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%)",
      'progid:DXImageTransform.Microsoft.gradient(startColorstr="#8ac953",endColorstr="#000000",GradientType=1)',
    ],
  },
];

const Blog = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(true);
  const timer1 = setTimeout(
    function() {
      setPause(true);
    }
    .bind(this),
    500
);
  return (
    <div className={styles.container}>
      <Element name="blog" className="element"></Element>

      <div className={styles._row}>
        <div
          onClick={() => {
            count > 0 ? setCount(count - 1) : setCount(blogList.length - 1);
            setPause(false);
            timer1;
            clearTimeout(timer1);
          }}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            margin: "20px",
          }}
        >{count}</div>

<div
          style={{
            width: "1000px",
            minHeight: "300px",
          }}
        >

          {(pause) ? <BlogPics
          title={blogList[count]["title"]}
          cover={blogList[count]["cover"]}
          cover1={blogList[count]["cover1"]}
          cover2={blogList[count]["cover2"]}
          cover3={blogList[count]["cover3"]}
          bg={blogList[count]["bg"]}
        /> : <></>}
        
        </div>

        <div
          onClick={() => {
            count < blogList.length-1 ? setCount(count + 1) : setCount(0);
            setPause(false);
            timer1;
            clearTimeout(timer1);
          }}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "red",
            margin: "20px",
          }}
        >{count}</div>
      </div>
    </div>
  );
};

export default Blog;
