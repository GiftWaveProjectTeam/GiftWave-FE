"use client";
import React, { SetStateAction, useRef, useState } from "react";
import * as InputStyles from "../../../Atom/Input/Input.css";
import * as styles from "./AuthInput.css";
import { Label, Input, Timer, Button } from "@components";

interface AuthInputProps {
  name: string;
  label: string;
}

const AuthInput = ({ label, name }: AuthInputProps) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [timeout, setTimeout] = useState<boolean>(false);

  const onClickHanlder = () => {
    setTrigger(false);
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Container}>
          <Label size="medium">{label} </Label>
          <div className={styles.InputButtonBox}>
            <div className={styles.TimerInputBox}>
              <Input name={name} className={InputStyles.AuthStyle} />
              {trigger && (
                <Timer
                  maxTime={10}
                  trigger={trigger}
                  setTrigger={setTrigger}
                  timeout={setTimeout}
                  mode="seconds"
                />
              )}
            </div>
            <Button
              size="small"
              label="인증"
              onClickHandler={() => {
                timeout !== true && setTrigger(true);
              }}
            />
            {timeout === true && (
              <Button
                size="small"
                label="재인증 요청"
                onClickHandler={() => {
                  setTrigger(true);
                }}
              />
            )}
          </div>
        </div>
        <div>
          <Label size="medium" error={timeout}>
            {timeout === true && "시간을 초과하였습니다."}
          </Label>
        </div>
      </div>

      <div className={styles.Wrapper}>
        <div className={styles.Container}>
          <Label size="medium">인증확인 </Label>
          <div className={styles.InputButtonBox}>
            <Input name="phoneConfirm" className={InputStyles.base} />
            <Button size="small" label="확인" onClickHandler={onClickHanlder} />
          </div>
        </div>
        <Label size="medium">...</Label>
      </div>
    </>
  );
};

export default AuthInput;
