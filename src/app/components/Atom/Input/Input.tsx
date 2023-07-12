import { ChangeEvent } from "react";
import * as styles from "./Input.css";

interface InputProps {
  type?: string;
  name?: string;
  className?: string;
  value?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  className,
  value,
  onChangeHandler,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className={className}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
