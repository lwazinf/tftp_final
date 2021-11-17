import { useContext } from "react";
import Image from 'next/image';
import { AppContext } from "./Context";
import styles from "../styles/DynamicModal.module.css";

const DynamicModal = () => {
  const { isVisible, setVisible, setInfo, modalInfo } = useContext(AppContext);
  return (
    <div
      style={{
        transition: isVisible ? "all 0.5s" : "all 0.2s",
        width: isVisible ? "800px" : "0px",
        height: "400px",
        pointerEvents: isVisible ? "auto" : "none",
        opacity: !isVisible ? "0" : "1",
      }}
      className={styles.dModal}
    >
        
        <div onClick={() => {
            setVisible(!isVisible)
            setInfo({ image: "/", selected: 0 })
          }} className={styles.exit}></div>
        
    </div>
  );
};

export default DynamicModal;
