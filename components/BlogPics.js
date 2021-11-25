import styles from "../styles/BlogPics.module.css";
import React, { useContext, useState } from "react";
import { AppContext, ContextWrapper } from "../components/Context";

const BlogPics = (props) => {

  const { currentShelf, setShelf } = useContext(AppContext);

  const cover = "url('" + props.cover[0] + "')"
  const pos = props.cover[1]
  
  const cover1 = "url('" + props.cover1[0] + "')"
  const pos1 = props.cover1[1]
  const subPos1 = props.cover1[2]
  const heading1 = props.cover1[3]
  const paragraph1 = props.cover1[4]
  
  const cover2 = "url('" + props.cover2[0] + "')"
  const pos2 = props.cover2[1]
  const subPos2 = props.cover2[2]
  const heading2 = props.cover2[3]
  const paragraph2 = props.cover2[4]
  
  const cover3 = "url('" + props.cover3[0] + "')"
  const pos3 = props.cover3[1]
  const subPos3 = props.cover3[2]
  const heading3 = props.cover3[3]
  const paragraph3 = props.cover3[4]
  
  const bg = props.bg[0]
  const bg1 = props.bg[1]
  const bg2 = props.bg[2]
  const bg3 = props.bg[3]
  const filter = props.bg[4]

  const [image, setImage] = useState({
    backgroundImage: cover,
    backgroundPositionY: pos,
    backgroundSize: "cover",
  });
  const [lock, setLock] = useState(0);

  const SwitchImage = (e) => {
    if (e == 1 && lock != 1) {
      setLock(1);
      setShelf([props.cover[0].split("_")[1].split(".")[0], heading1, paragraph1]);
      setImage({
        backgroundImage: cover1,
        backgroundPositionY: pos1,
        backgroundSize: "cover",
      });
    } else if (e == 2 && lock != 2) {
      setLock(2);
      setShelf([props.cover[0].split("_")[1].split(".")[0], heading2, paragraph2]);
      setImage({
        backgroundImage: cover2,
        backgroundPositionY: pos2,
        backgroundSize: "cover",
      });
    } else if (e == 3 && lock != 3) {
      setLock(3);
      setShelf([props.cover[0].split("_")[1].split(".")[0], heading3, paragraph3]);
      setImage({
        backgroundImage: cover3,
        backgroundPositionY: pos3,
        backgroundSize: "cover",
      });
    } else {
      setLock(0);
      setShelf(["", currentShelf[1], currentShelf[2]]);
      setImage({
        backgroundImage: cover,
        backgroundPositionY: pos,
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
                  backgroundPositionY: subPos1,
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
                  backgroundPositionY: subPos2,
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
                  backgroundPositionY: subPos3,
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
      <div style={{height: currentShelf[0] == props.cover[0].split("_")[1].split(".")[0] ? '250px' : "0px", padding: "10px"}} className={styles._shelf}>
        <p1 className={styles._heading} style={{ opacity: currentShelf[0] == props.cover[0].split("_")[1].split(".")[0] ? "1" : "0", opacity: currentShelf[0] == props.cover[0].split("_")[1].split(".")[0] ? "1" : "0"}}>
          { currentShelf[1].toUpperCase() }
        </p1>
        <p3 className={styles._paragraph} style={{ opacity: currentShelf[0] == props.cover[0].split("_")[1].split(".")[0] ? "1" : "0"}}>
          { currentShelf[2] }
        </p3>
      </div>
    </div>
  );
};

export default BlogPics;
