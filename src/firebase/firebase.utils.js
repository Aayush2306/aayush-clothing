import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB08Mc98W_JadB7QIxmfvIJJzHU5WL1f4A",
  authDomain: "crwn-49316.firebaseapp.com",
  projectId: "crwn-49316",
  storageBucket: "crwn-49316.appspot.com",
  messagingSenderId: "182056660437",
  appId: "1:182056660437:web:252b074e7749a6767e215c",
  measurementId: "G-QNYMFD773R",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, addData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exsists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addData,
      });
    } catch (err) {
      console.log(err);
    }

    return userRef;
  }
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
