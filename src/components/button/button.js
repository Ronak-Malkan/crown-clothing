import "./button.scss";

const buttonTypes = {
   google: "google-sign-in",
   inverted: "inverted",
};

const Button = ({ children, buttonType, ...buttonProps }) => {
   return (
      <button
         className={` button-container ${buttonTypes[buttonType]}`}
         {...buttonProps}
      >
         {children}
      </button>
   );
};

export default Button;
