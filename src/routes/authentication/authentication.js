import SignUpForm from "../../components/signUp/signUp";
import SignInComponent from "../../components/signIn/signIn";

import "./authentication.scss";

const Authentication = () => {
   return (
      <div className="auth-container">
         <SignInComponent />
         <SignUpForm />
      </div>
   );
};

export default Authentication;
