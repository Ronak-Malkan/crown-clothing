import {
   signInWithGooglePopup,
   createUserDocumentForAuth,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/signUp/signUp";

const SignIn = () => {
   const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      console.log(user);
      const userDocRef = await createUserDocumentForAuth(user);
   };

   return (
      <div>
         <h1>Sign In Page</h1>
         <button onClick={logGoogleUser}>Sign In with Google Popup</button>
         <SignUpForm />
      </div>
   );
};

export default SignIn;
