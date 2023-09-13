import { initializeApp } from "firebase/app";

import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBsb0em9UTxIBNvHjJ4I6ulEgK5JAi-dRs",

   authDomain: "crown-clothing-db-7a14a.firebaseapp.com",

   projectId: "crown-clothing-db-7a14a",

   storageBucket: "crown-clothing-db-7a14a.appspot.com",

   messagingSenderId: "902063917190",

   appId: "1:902063917190:web:56e8cd8462880132bca907",
};

const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentForAuth = async (
   userAuth,
   additionalInformation = {}
) => {
   if (!userAuth) return;
   const userDocRef = doc(db, "users", userAuth.uid);

   const userInfo = await getDoc(userDocRef);

   if (!userInfo.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
         });
      } catch (error) {
         console.log("erorr creating the user", error.message);
      }
   }
   return userDocRef;
};

export const createUserUsingEmailPassword = async (email, password) => {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUsingEmailassword = async (email, password) => {
   if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
   return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
   onAuthStateChanged(auth, callback);
