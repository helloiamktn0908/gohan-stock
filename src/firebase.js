import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA50K98gR_YybPar5tdJ6KiiOrSobRjrfQ",
  authDomain: "gohan-stock.firebaseapp.com",
  projectId: "gohan-stock",
  storageBucket: "gohan-stock.appspot.com",
  messagingSenderId: "718659793898",
  appId: "1:718659793898:web:f08e1e514c5303ad107893",
  measurementId: "G-107882GSRH",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
