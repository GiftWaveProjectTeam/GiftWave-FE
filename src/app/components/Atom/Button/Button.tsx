import { MouseEvent, ReactNode } from "react";
import { sizeVariants } from "./Button.css";

export interface ButtonProps {
  size: "small" | "medium" | "large";
  label?: string;
  type?: "button" | "reset" | "submit" | undefined;
  backgroundColor?: string;
  onClickHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  size,
  label,
  backgroundColor,
  type,
  onClickHandler,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={sizeVariants[size]}
      style={{ backgroundColor: `${backgroundColor}` }}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}
