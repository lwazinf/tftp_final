import styles from "../styles/Food.module.css";
import React, { useState, useEffect } from "react";

const Food = () => {
  const [image, setImage] = useState({
    backgroundImage: "url('/assets/food.jpg')",
    backgroundPositionY: "-180px",
    backgroundSize: "cover",
  });
  const [lock, setLock] = useState(0);

  const SwitchImage = (e) => {
    if (e == 1 && lock != 1) {
      setLock(1);
      setImage({
        backgroundImage: "url('/assets/doghnut.jpg')",
        backgroundPositionY: "-800px",
        backgroundSize: "cover",
      });
    } else if (e == 2 && lock != 2) {
      setLock(2);
      setImage({
        backgroundImage: "url('/assets/meat.jpg')",
        backgroundPositionY: "-180px",
        backgroundSize: "cover",
      });
    } else if (e == 3 && lock != 3) {
      setLock(3);
      setImage({
        backgroundImage: "url('/assets/chips.jpg')",
        backgroundPositionY: "-180px",
        backgroundSize: "cover",
      });
    } else {
      setLock(0);
      setImage({
        backgroundImage: "url('/assets/food.jpg')",
        backgroundPositionY: "-180px",
        backgroundSize: "cover",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles._image} style={image}>
        <div className={styles._overlay}>
          <div className={styles._textSection}>
            <div className={styles._bigText}>TEASE YOUR TASTEBUDS</div>
            <div className={styles._smallText}>BLOG PICS</div>
          </div>
          <div className={styles._imageSection}>
            <div className={styles._boxImage1}>
              <div
                className={styles._subImage1}
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

export default Food;
