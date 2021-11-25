import styles from "../styles/InputSection.module.css";
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from "react";

const fileTypes = ["JPG", "PNG"];

const InputSection = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className={styles.container}>


 
 <div className={styles._sideImage} />

    <div className={styles.container2}>
      <div className={styles._commentInput}>
        <div className={styles._commentRow}>
          <input
            placeholder="Name"
            type="email"
            id="email"
            className={styles._commentAux}
            name="email"
            // value={emailList.email}
            // onChange={(e) =>
            //   setEmailList({ ...emailList, email: e.target.value })
            // }
          />

          <input
            placeholder="Email"
            type="email"
            id="email"
            className={styles._commentAux}
            name="email"
            // value={emailList.email}
            // onChange={(e) =>
            //   setEmailList({ ...emailList, email: e.target.value })
            // }
          />
        </div>

        <textarea
          placeholder="What's on your mind? Have any memories to share? Feel free to express yourself!"
          type="text"
          id="email"
          className={styles._comment}
          name="email"
          cols="5"
          // value={emailList.email}
          // onChange={(e) =>
          //   setEmailList({ ...emailList, email: e.target.value })
          // }
        />

        <div className={styles._commentButton}></div>
      </div>
      <div className={styles._commentOutput}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </div>
    </div>
</div>
  );
};

export default InputSection;
