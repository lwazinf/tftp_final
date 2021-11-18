import styles from "../styles/BlogPics.module.css";
import React, { useState, useEffect } from "react";

const BlogPics = (props) => {
  const cover = "url('" + props.cover[0] + "')"
  const coverPos = props.cover[1]
  const cover1 = "url('" + props.cover1[0] + "')"
  const coverPos1 = props.cover1[1]
  const coverSubPos1 = props.cover1[2]
  const cover2 = "url('" + props.cover2[0] + "')"
  const coverPos2 = props.cover2[1]
  const coverSubPos2 = props.cover2[2]
  const cover3 = "url('" + props.cover3[0] + "')"
  const coverPos3 = props.cover3[1]
  const coverSubPos3 = props.cover3[2]
  
  const bg = props.bg[0]
  const bg1 = props.bg[1]
  const bg2 = props.bg[2]
  const bg3 = props.bg[3]
  const filter = props.bg[4]

  const [image, setImage] = useState({
    backgroundImage: cover,
    backgroundPositionY: coverPos,
    backgroundSize: "cover",
  });
  const [lock, setLock] = useState(0);

  const SwitchImage = (e) => {
    if (e == 1 && lock != 1) {
      setLock(1);
      setImage({
        backgroundImage: cover1,
        backgroundPositionY: coverPos1, // "-800px",
        backgroundSize: "cover",
      });
    } else if (e == 2 && lock != 2) {
      setLock(2);
      setImage({
        backgroundImage: cover2,
        backgroundPositionY: coverPos2, //"-200px",
        backgroundSize: "cover",
      });
    } else if (e == 3 && lock != 3) {
      setLock(3);
      setImage({
        backgroundImage: cover3,
        backgroundPositionY: coverPos3, //"-110px",
        backgroundSize: "cover",
      });
    } else {
      setLock(0);
      setImage({
        backgroundImage: cover,
        backgroundPositionY: coverPos,
        backgroundSize: "cover",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles._image} style={image}>
        <div className={styles._overlay} style={{
          background: bg,
          background: bg1,
          background: bg2,
          background: bg3,
          filter: filter,
        }}>
          <div className={styles._textSection}>
            <div className={styles._bigText}>{props.title}</div>
            <div className={styles._smallText}>BLOG PICS</div>
          </div>
          <div className={styles._imageSection}>
            <div className={styles._boxImage1}>
              <div
              className={styles._subImage1}
                style={{
                  backgroundImage: cover1,
                  backgroundPositionY: coverSubPos1,
                  backgroundSize: "cover",
                }}
                onClick={(e) => {
                  if (lock == 1) {
                    SwitchImage(0);
                  } else {
                    SwitchImage(1);
                  }
                }}
              ></div>
            </div>
            <div className={styles._boxImage2}>
              <div
              className={styles._subImage2}
                style={{
                  backgroundImage: cover2,
                  backgroundPositionY: coverSubPos2,
                  backgroundSize: "cover",
                }}
                
                onClick={(e) => {
                  if (lock == 2) {
                    SwitchImage(0);
                  } else {
                    SwitchImage(2);
                  }
                }}
              ></div>
            </div>
            <div className={styles._boxImage3}>
              <div
              className={styles._subImage3}
                style={{
                  backgroundImage: cover3,
                  backgroundPositionY: coverSubPos3,
                  backgroundSize: "cover",
                }}
                onClick={(e) => {
                  if (lock == 3) {
                    SwitchImage(0);
                  } else {
                    SwitchImage(3);
                  }
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPics;
