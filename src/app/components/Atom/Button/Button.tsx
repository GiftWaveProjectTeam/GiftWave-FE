import { MouseEvent, ReactNode } from "react";
import { colorVariants, sizeVariants } from "./Button.css";

export interface ButtonProps {
  size: "small" | "medium" | "large";
  label?: string;
  type?: "button" | "reset" | "submit" | undefined;
  color?: "important";
  onClickHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  size,
  label,
  type,
  color,
  onClickHandler,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={
        color
          ? `${sizeVariants[size]} ${colorVariants[color]}`
          : `${sizeVariants[size]}`
      }
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}
