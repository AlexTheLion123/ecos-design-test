import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc, onSnapshot
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo33KDWvS231BWs3XimNuv6SCZQlrO4Eg",
    authDomain: "ecos-design.firebaseapp.com",
    projectId: "ecos-design",
    storageBucket: "ecos-design.appspot.com",
    messagingSenderId: "736364339464",
    appId: "1:736364339464:web:37805b3cded2e0dc670cbd",
    measurementId: "G-2TD4F13GT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
export const colRef = collection(db, 'errors')

// // get collection data
// export let getErrorsPromise = getDocs(colRef)
//     .then(snapshot => {
//         let errors = []
//         snapshot.docs.forEach(doc => {
//             errors.push({ ...doc.data(), id: doc.id })
//         })

//         return errors
//     })
//     .catch(err => {
//         return err
//     })

// adding document
export let addDocument = function (args) {

    addDoc(colRef, {
        ...args
    })
};

