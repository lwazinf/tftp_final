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

const Blog = () => {
  return (
    <div className={styles.container}>
      <Element name="blog" className="element"></Element>
      <div className={styles._heading}>What&apos;s happening</div>
      <div className={styles._sub}>
        For those curious as to what we do at our Theme Park!
      </div>
      <BlogPics
        title={"TEASE YOUR TASTEBUDS"}
        cover={["/assets/cover_food.jpg", "-150px"]}
        cover1={["/assets/1_food.jpg", "-200px", "-50px"]}
        cover2={["/assets/2_food.jpg", "-200px", "-50px"]}
        cover3={["/assets/meat.jpg", "-200px", "-25px"]}
        bg={[
          "rgb(150, 18, 84)",
          "-moz-linear-gradient(37deg, rgba(150, 18, 84, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
          "-webkit-linear-gradient(37deg,rgba(150, 18, 84, 0.6936975473783263) 0%,rgba(0, 0, 0, 0) 65%",
          "linear-gradient(37deg, rgba(150, 18, 84, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
          'progid:DXImageTransform.Microsoft.gradient(startColorstr="#961254",endColorstr="#000000",GradientType=1)',
        ]}
      />
      <BlogPics
        title={"SO MUCH TO EXPERIENCE"}
        cover={["/assets/cover_event.jpg", "-80px"]}
        cover1={["/assets/1_event.jpg", "-260px", "-50px"]}
        cover2={["/assets/2_event.jpg", "-200px", "-50px"]}
        cover3={["/assets/3_event.jpg", "-250px", "-25px"]}
        bg={[
          "rgb(138, 201, 83)",
          "-moz-linear-gradient(37deg,rgba(138, 201, 83, 0.6936975473783263) 0%,rgba(0, 0, 0, 0) 65%",
          "-webkit-linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
          "linear-gradient(37deg, rgba(138, 201, 83, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%)",
          'progid:DXImageTransform.Microsoft.gradient(startColorstr="#8ac953",endColorstr="#000000",GradientType=1)',
        ]}
      />
      <BlogPics
        title={"WELCOME TO ELYSIUM"}
        cover={["/assets/cover_accom.jpg", "-350px"]}
        cover1={["/assets/1_accom.jpg", "-800px", "-180px"]}
        cover2={["/assets/2_accom.jpg", "-200px", "-50px"]}
        cover3={["/assets/3_accom.jpg", "-250px", "-25px"]}
        bg={[
          "rgb(208, 167, 22)",
          "-moz-linear-gradient(37deg,rgba(208, 167, 22, 0.6936975473783263) 0%,rgba(0, 0, 0, 0) 65%",
          "-webkit-linear-gradient(37deg, rgba(208, 167, 22, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%",
          "linear-gradient(37deg, rgba(208, 167, 22, 0.6936975473783263) 0%, rgba(0, 0, 0, 0) 65%)",
          'progid:DXImageTransform.Microsoft.gradient(startColorstr="#d0a716",endColorstr="#000000",GradientType=1)',
        ]}
      />
    </div>
  );
};

export default Blog;
