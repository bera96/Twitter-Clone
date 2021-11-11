import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'





const firebaseConfig = {
  apiKey: "AIzaSyBxHG5L_FaaSzqghkX6E1lAANwJiq46d68",
  authDomain: "twitter-clone-production-1004c.firebaseapp.com",
  projectId: "twitter-clone-production-1004c",
  storageBucket: "twitter-clone-production-1004c.appspot.com",
  messagingSenderId: "1011063218127",
  appId: "1:1011063218127:web:5c78ad7690f61b60417cba"
};

firebase.initializeApp(firebaseConfig)

const auth=firebase.auth()
const db=firebase.firestore()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const emailAuthProvider= new firebase.auth.EmailAuthProvider()

const ref=firebase.firestore().collection("User")
const toFollowRef=firebase.firestore().collection("toFollow")
const trends=firebase.firestore().collection("trends")
const tweets=firebase.firestore().collection("Tweets")



export {auth,googleAuthProvider,emailAuthProvider,ref,toFollowRef,trends,db,tweets}








