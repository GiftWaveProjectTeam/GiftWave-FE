import { ChangeEvent } from "react";
import * as styles from "./Input.css";

interface InputProps {
  type?: "text" | "file" | "password" | "radio" | "select" | "checkbox";
  name?: string;
  className?: string;
  value?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
}

export default function Input({
  type,
  name,
  className,
  value,
  onChangeHandler,
  disabled,
  checked,
}: InputProps) {
  return (
    <input
      disabled={disabled}
      checked={checked}
      type={type}
      name={name}
      className={className}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
