import { addDoc, db, collection } from "./firebase";

const getUsers = async () => {
  const snapshot = await db.collection("users").get();
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export { getUsers };