import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9WWic99NqAKnQOsR4XfBViBmJgaNl5mM",
  authDomain: "react-e-shop-af0e7.firebaseapp.com",
  databaseURL: "https://react-e-shop-af0e7.firebaseio.com",
  projectId: "react-e-shop-af0e7",
  storageBucket: "react-e-shop-af0e7.appspot.com",
  messagingSenderId: "170081251199",
  appId: "1:170081251199:web:eeb9e54c65edf60117744a",
};

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;
  const userRef = firestore.doc(`/users/${authUser.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message());
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
