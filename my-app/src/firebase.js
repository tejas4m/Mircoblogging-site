import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp0GmI6VAWm-wtfKyOl7uI47GIu-dZC5A",
    authDomain: "twitter-clone-eb9fc.firebaseapp.com",
    projectId: "twitter-clone-eb9fc",
    storageBucket: "twitter-clone-eb9fc.appspot.com",
    messagingSenderId: "425171256856",
    appId: "1:425171256856:web:9df7684cb55ecde7a5256d",
    measurementId: "G-TSZ649WWQF"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage() ;  

  //export default storage ;
 //export default db;
  export const auth = firebaseApp.auth()
  export {storage , db  as default };
