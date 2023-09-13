import { useState } from "react";
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import "./signIn.scss";

import {
   signInWithGooglePopup,
   signInUsingEmailassword,
} from "../../utils/firebase/firebase";

const signInInputSkeleton = {
   email: "",
   password: "",
};

const SignInComponent = () => {
   const [signInFields, setSignInFields] = useState(signInInputSkeleton);

   const { email, password } = signInFields;

   const handleInput = (e) => {
      const { name, value } = e.target;

      setSignInFields({ ...signInFields, [name]: value });
   };

   const logGoogleUser = async () => {
      await signInWithGooglePopup();
   };

   const signInSubmitHandler = async (e) => {
      e.preventDefault();
      try {
         await signInUsingEmailassword(email, password);
         resetForm();
      } catch (error) {
         switch (error.code) {
            case "auth/wrong-password":
               alert("Incorrect password for email.");
               break;
            case "auth/user-not-found":
               alert("No user associated with this email.");
               break;
            default:
               console.log(error);
         }
      }
   };

   const resetForm = () => {
      setSignInFields(signInInputSkeleton);
   };

   return (
      <div className="sign-up-container">
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={signInSubmitHandler}>
            <FormInput
               label="email"
               type="email"
               onInput={handleInput}
               value={email}
               name="email"
               required
            />
            <FormInput
               label="password"
               type="password"
               onInput={handleInput}
               value={password}
               name="password"
               required
            />
            <div className="buttonsContainer">
               <Button type="submit">Sign In</Button>
               <Button
                  type="button"
                  buttonType="google"
                  onClick={logGoogleUser}
               >
                  Google sign in
               </Button>
            </div>
         </form>
      </div>
   );
};

export default SignInComponent;
