import { useState } from "react";
import FormInput from "../formInput/formInput";
import Button, { buttonTypes } from "../button/button";
import { SignInContainer, ButtonsContainer } from "./signIn.styles.js";

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
      <SignInContainer>
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
            <ButtonsContainer>
               <Button type="submit">Sign In</Button>
               <Button
                  type="button"
                  buttonType={buttonTypes.google}
                  onClick={logGoogleUser}
               >
                  Google sign in
               </Button>
            </ButtonsContainer>
         </form>
      </SignInContainer>
   );
};

export default SignInComponent;
