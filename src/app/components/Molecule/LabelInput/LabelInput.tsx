"use client";
import React, { ChangeEvent, useState } from "react";
import { HiddenIcon, Input, Label } from "@components";
import classNames from "classnames";

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
  hidden?: boolean;
  maxLength?: number;
}

const LabelInput = ({
  label,
  value,
  isValid,
  error,
  name,
  type,
  onChangeHandler,
  hidden,
  maxLength,
}: LabelInputProps) => {
  const [show, setShow] = useState(false);
  const showHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(true);
  };

  const hiddenHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow(false);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.columnInput}>
        <Label size="medium" weight="medium">
          {label}
        </Label>
        <div
          className={classNames(
            value === "" && styles.InputBlock,
            value !== "" && (isValid ? styles.okValid : styles.notValid)
          )}
        >
          <Input
            type={show === false ? type : "text"}
            name={name}
            value={value}
            onChangeHandler={onChangeHandler}
            className={signIn}
            maxLength={maxLength}
          />
          {hidden === true && (
            <div onMouseDown={showHandler} onMouseUp={hiddenHandler}>
              <HiddenIcon />
            </div>
          )}
        </div>
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
