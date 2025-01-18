import React from "react";
import { ButtonProps } from "./button.interface";

const Button = (props: ButtonProps) => {
  const { onClick, children } = props;

  const handleClick = () => {
    onClick();
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
