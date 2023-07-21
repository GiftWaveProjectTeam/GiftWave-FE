"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
import { HiddenIcon, Input, InputBox, Label } from "@components";

import * as styles from "./LabelInput.css";
import { signIn } from "../../Atom/Input/Input.css";

interface LabelInputProps {
  label: string;
  value: string;
  name: string;
  isValid: boolean;
  error: string;
  type?: "text" | "file" | "password" | "radio" | "select" | "checkbox";
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  icons?: () => JSX.Element;
}

const LabelInput = ({
  label,
  value,
  isValid,
  error,
  name,
  type,
  onChangeHandler,
  maxLength,
  icons,
}: LabelInputProps) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.columnInput}>
        <Label size="medium" weight="medium">
          {label}
        </Label>
        <InputBox value={value} showValid={true} isValid={isValid}>
          {icons && icons()}
          {type !== "password" ? (
            <Input
              type={type}
              name={name}
              value={value}
              onChangeHandler={onChangeHandler}
              className={signIn}
              maxLength={maxLength}
            />
          ) : (
            <PasswordInput
              value={value}
              name={name}
              type={type}
              onChangeHandler={onChangeHandler}
              maxLength={maxLength}
            />
          )}
        </InputBox>
      </div>
      {value !== "" && !isValid && (
        <Label size="small" error={!isValid}>
          {error}
        </Label>
      )}
    </div>
  );
};

export default LabelInput;

interface PasswordInputProps {
  value: string;
  name: string;
  type?: "text" | "file" | "password" | "radio" | "select" | "checkbox";
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

const PasswordInput = ({
  value,
  name,
  type,
  onChangeHandler,
  maxLength,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  const ohShow = useCallback(() => {
    setShow(true);
  }, []);

  const onHidden = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <Input
        type={show === false ? type : "text"}
        name={name}
        value={value}
        onChangeHandler={onChangeHandler}
        className={signIn}
        maxLength={maxLength}
      />
      <div onMouseDown={ohShow} onMouseUp={onHidden}>
        <HiddenIcon />
      </div>
    </>
  );
};
