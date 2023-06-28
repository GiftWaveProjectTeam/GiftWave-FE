"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as styles from "../../styles/signup.css";
import * as inputStyle from "../Atom/Input/Input.css";
import Label from "../Atom/Label/Label";
import Input from "../Atom/Input/Input";
import Button from "../Atom/Button/Button";
import { useInterval } from "../../hooks/useInterval";
import Timer from "../Atom/Timer/Timer";

const SignupForm = () => {
  /**************************** 상태관리 **********************************/
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [phone, stePhone] = useState<string>("");

  const [isUserIdValid, setIsUserIdValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isPasswordConfirmValid, setIsPaswordConfirmValid] =
    useState<boolean>(false);

  /******************************************************************* */
  /**************************** 유효성 style 반경 *********************/
  const BORDER_RED = "2px solid red";
  const BORDER_GREEN = "2px solid green";

  const updateInputBorderStyle = (
    inputElement: HTMLInputElement,
    isValid: boolean
  ) => {
    isValid === false
      ? (inputElement.style.border = BORDER_RED)
      : (inputElement.style.border = BORDER_GREEN);
  };

  /******************************************************************* */
  /**************************** 유효성 검사*******************************/
  const changeUserIdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    setUserId(e.target.value);

    const userIdRegex = /^[a-zA-Z0-9]{8,30}$/;
    if (userIdRegex.test(id) === false) {
      setIsUserIdValid(false);
      updateInputBorderStyle(e.currentTarget, false);
    } else {
      setIsUserIdValid(true);
      updateInputBorderStyle(e.currentTarget, true);
    }
  };
  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    setPassword(pw);
    const passwordRegex = /^[a-zA-Z0-9]{8,30}$/;
    if (passwordRegex.test(pw) === false) {
      setIsPasswordValid(false);
      updateInputBorderStyle(e.currentTarget, false);
    } else {
      setIsPasswordValid(true);
      updateInputBorderStyle(e.currentTarget, true);
    }
  };
  const changePasswordConfirmHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const pwComfirm = e.target.value;
    setPasswordConfirm(pwComfirm);

    if (pwComfirm !== password) {
      setIsPaswordConfirmValid(false);
      updateInputBorderStyle(e.currentTarget, false);
    } else {
      setIsPaswordConfirmValid(true);
      updateInputBorderStyle(e.currentTarget, true);
    }
  };

  /******************************************************************* */
  /**************************** Server 전송 *******************************/

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      userId: e.currentTarget.userId.value,
      password: e.currentTarget.password.value,
      phone: e.currentTarget.phone.value,
    };
  }

  /******************************************************************* */

  const [trigger, setTrigger] = useState<boolean>(false);

  /******************************************************************* */

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label>아이디</Label>
        <Input
          name="userId"
          className={inputStyle.base}
          value={userId}
          onChangeHandler={changeUserIdHandler}
        />
        <Label>...</Label>
      </div>
      <div>
        <Label>비밀번호</Label>
        <Input
          type="password"
          name="password"
          className={inputStyle.base}
          value={password}
          onChangeHandler={changePasswordHandler}
        />
        <Label>...</Label>
      </div>
      <div>
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          name="passwordConfirm"
          className={inputStyle.base}
          value={passwordConfirm}
          onChangeHandler={changePasswordConfirmHandler}
        />
        <Label>...</Label>
      </div>
      <div>
        <Label>휴대폰인증</Label>
        <Input name="phone" className={inputStyle.base} />
        <Button
          size="small"
          label="인증"
          onClickHandler={() => {
            setTrigger(true);
          }}
        />
        <Label>{trigger && <Timer maxTime={10} trigger={trigger} />}</Label>
      </div>
      <div>
        <Label>인증확인</Label>
        <Input name="phoneConfirm" className={inputStyle.base} />
        <Button size="small" label="확인" />
        <Label>...</Label>
      </div>

      <div>
        <Button type="submit" size="large" label="가입하기" />
      </div>
    </form>
  );
};

export default SignupForm;
