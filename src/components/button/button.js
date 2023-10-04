import {
   BaseButton,
   GoggleSignInButton,
   InvertedButton,
} from "./button.styles";

export const buttonTypes = {
   base: "base",
   google: "google-sign-in",
   inverted: "inverted",
};

const getButton = (buttonType = buttonTypes.base) =>
   ({
      [buttonTypes.base]: BaseButton,
      [buttonTypes.google]: GoggleSignInButton,
      [buttonTypes.inverted]: InvertedButton,
   }[buttonType]);

const Button = ({ children, buttonType, ...buttonProps }) => {
   const CustomButton = getButton(buttonType);
   return <CustomButton {...buttonProps}>{children}</CustomButton>;
};

export default Button;
