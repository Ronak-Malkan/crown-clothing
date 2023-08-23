import { initializeApp } from "firebase/app";

import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
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

export const createUserDocumentForAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid);
   console.log(userDocRef);

   const userInfo = await getDoc(userDocRef);
   console.log(userInfo);

   if (!userInfo.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
         });
      } catch (error) {
         console.log("erorr creating the user", error.message);
      }
   }
   return userDocRef;
};
