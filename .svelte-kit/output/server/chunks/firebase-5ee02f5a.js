import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAo33KDWvS231BWs3XimNuv6SCZQlrO4Eg",
  authDomain: "ecos-design.firebaseapp.com",
  projectId: "ecos-design",
  storageBucket: "ecos-design.appspot.com",
  messagingSenderId: "736364339464",
  appId: "1:736364339464:web:37805b3cded2e0dc670cbd",
  measurementId: "G-2TD4F13GT2"
};
initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "errors");
let addDocument = function(args) {
  addDoc(colRef, {
    ...args
  });
};
export { addDocument as a, colRef as c };
