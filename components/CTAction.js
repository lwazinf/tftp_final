import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";
import heroStyles from "../styles/Hero.module.css";

const CTAction = () => {
  const [emailList, setEmailList] = useState({ email: "" });

  const onSubmit = async () => {
    const collectionRef = collection(db, "emailList");
    const docRef = await addDoc(collectionRef, { ...emailList });
    setEmailList({ email: "" });
  };
  return (
    <div>
      <div className={heroStyles.buttonDiv}>
        <input
          placeholder="Join our mailing list for updates.."
          type="email"
          id="email"
          className={heroStyles.emailField}
          name="email"
          value={emailList.email}
          onChange={(e) =>
            setEmailList({ ...emailList, email: e.target.value })
          }
        />
        <button
          onClick={onSubmit}
          className={heroStyles.button_5}
          role="button"
        >
          Get Notified
        </button>
      </div>
    </div>
  );
};

export default CTAction;
