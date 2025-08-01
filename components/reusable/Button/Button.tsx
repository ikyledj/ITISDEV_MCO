import React, { ReactNode } from "react";

const Button = ({
  children,
  style,
  type = "button",
  disabled,
  handler,
}: {
  children?: ReactNode;
  style?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  handler?: () => void;
}) => {
  return (
    <button
      onClick={handler}
      disabled={disabled}
      type={type}
      className={`${style} disabled:bg-primary disabled:cursor-not-allowed hover:disabled:cursor-not-allowed bg-primary-light px-4 py-2 rounded hover:bg-primary cursor-pointer transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
