import React, { ChangeEvent } from "react";
import Label from "../../Atom/Label/Label";
import Input from "../../Atom/Input/Input";
import * as inputStyle from "../../Atom/Input/Input.css";
import { columnInput, Wrapper } from "./LabelInput.css";

interface LabelInputProps {
  label: string;
  value: string;
  isValid: boolean;
  error: string;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({
  label,
  value,
  isValid,
  error,
  onChangeHandler,
}: LabelInputProps) => {
  return (
    <div className={Wrapper}>
      <div className={columnInput}>
        <Label size="medium">{label} </Label>
        <Input
          name="userId"
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
