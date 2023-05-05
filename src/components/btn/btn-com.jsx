import React from "react";
import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.jsx";
export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (btnType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[btnType]);
const Button = ({ children, btnType, ...otherprops }) => {
  const CustomButton = getButton(btnType);
  return <CustomButton {...otherprops}>{children}</CustomButton>;
};

export default Button;
