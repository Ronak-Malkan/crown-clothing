import { useState } from "react";

import FormInput from "../formInput/formInput";
import Button from "../button/button";

import { SignUpContainer } from "./signUp.styles";

import {
   createUserUsingEmailPassword,
   createUserDocumentForAuth,
} from "../../utils/firebase/firebase";

const signUpInputSkeleton = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = () => {
   const [signUpFields, setFields] = useState(signUpInputSkeleton);

   const { displayName, email, password, confirmPassword } = signUpFields;

   const resetForm = () => {
      setFields(signUpInputSkeleton);
   };

   const handelSubmit = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
         alert("passwords do not match");
         return;
      }

      try {
         const { user } = await createUserUsingEmailPassword(email, password);
         await createUserDocumentForAuth(user, { displayName });
         resetForm();
      } catch (e) {
         if (e.code === "auth/email-already-in-use") {
            alert("This email is already registered");
         } else {
            console.log("Sign Up error", e);
         }
      }
   };

   const handleInput = (e) => {
      const { name, value } = e.target;

      setFields({ ...signUpFields, [name]: value });
   };

   return (
      <SignUpContainer>
         <h2>Don't have an account?</h2>
         <span>Sign up with your email and password</span>
         <form onSubmit={handelSubmit}>
            <FormInput
               label="Display Name"
               type="text"
               onInput={handleInput}
               value={displayName}
               name="displayName"
               required
            />
            <FormInput
               label="Email"
               type="email"
               onInput={handleInput}
               value={email}
               name="email"
               required
            />
            <FormInput
               label="Password"
               type="password"
               onInput={handleInput}
               value={password}
               name="password"
               required
            />
            <FormInput
               label="Confirm Password"
               type="password"
               onInput={handleInput}
               value={confirmPassword}
               name="confirmPassword"
               required
            />
            <Button type="submit">Sign Up</Button>
         </form>
      </SignUpContainer>
   );
};

export default SignUpForm;
