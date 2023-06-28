import { ChangeEvent } from "react";
import * as styles from "./Input.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface InputProps {
  type?: string;
  name?: string;
  className?: string;
  value?: string;
  border?: string;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  name,
  className,
  border,
  value,
  onChangeHandler,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className={className}
      style={{ borderColor: `${border}` }}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
