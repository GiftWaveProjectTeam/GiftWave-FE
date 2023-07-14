import React, { ChangeEvent } from "react";
import * as inputStyle from "@components/Atom/Input/Input.css";
import { columnInput, Wrapper } from "./LabelInput.css";
import { Input, Label } from "@components";

interface LabelInputProps {
  label: string;
  value: string;
  isValid: boolean;
  error: string;
  name: string;
  type?: "text" | "file" | "password" | "radio" | "select" | "checkbox";
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({
  label,
  value,
  isValid,
  error,
  name,
  type,
  onChangeHandler,
}: LabelInputProps) => {
  return (
    <div className={Wrapper}>
      <div className={columnInput}>
        <Label size="medium">{label} </Label>
        <Input
          type={type}
          name={name}
          className={`${inputStyle.base}
        ${
          value !== "" && (isValid ? inputStyle.okValid : inputStyle.notValid)
        }`}
          value={value}
          onChangeHandler={onChangeHandler}
        />
      </div>
      {value !== "" && !isValid && (
        <Label size="medium" error={!isValid}>
          {error}
        </Label>
      )}
    </div>
  );
};

export default LabelInput;
