import { ChangeEvent } from "react";
import * as styles from "./Input.css";

interface InputProps {
  type?:
    | "text"
    | "file"
    | "password"
    | "radio"
    | "select"
    | "checkbox"
    | "date"
    | "time";
  name?: string;
  className?: string;
  value?: string | number;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
  placeholder?: string;
  maxLength?: number;
  accept?: string;
}

export default function Input({
  type,
  name,
  className,
  value,
  onChangeHandler,
  disabled,
  checked,
  placeholder,
  maxLength,
  accept
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
      placeholder={placeholder}
      maxLength={maxLength}
      accept={accept}
    />
  );
}
