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
  const [phone, setPhone] = useState<string>("");

  const [isUserIdValid, setIsUserIdValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isPasswordConfirmValid, setIsPaswordConfirmValid] =
    useState<boolean>(false);

  /******************************************************************* */

  /**************************** 유효성 검사*******************************/
  const changeUserIdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    setUserId(e.target.value);

    const userIdRegex = /^[a-zA-Z0-9]{8,30}$/;
    if (userIdRegex.test(id) === false) {
      setIsUserIdValid(false);
    } else {
      setIsUserIdValid(true);
    }
  };
  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    setPassword(pw);
    const passwordRegex = /^[a-zA-Z0-9]{8,30}$/;
    if (passwordRegex.test(pw) === false) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };
  const changePasswordConfirmHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const pwComfirm = e.target.value;
    setPasswordConfirm(pwComfirm);

    if (pwComfirm !== password) {
      setIsPaswordConfirmValid(false);
    } else {
      setIsPaswordConfirmValid(true);
    }
  };

  /******************************************************************* */
  /**************************** Server 전송 *******************************/

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  /******************************************************************* */

  const [trigger, setTrigger] = useState<boolean>(false);

  /******************************************************************* */

  return (
    <form data-testid="submit-form" onSubmit={handleSubmit}>
      <div>
        <Label>
          아이디
          <Input
            name="userId"
            className={`${inputStyle.base}
            ${
              userId !== "" &&
              (isUserIdValid ? inputStyle.okValid : inputStyle.notValid)
            }`}
            value={userId}
            onChangeHandler={changeUserIdHandler}
          />
        </Label>
        <Label>아이디는 6자이상 어쩌꾸~</Label>
      </div>
      <div>
        <Label>
          비밀번호
          <Input
            type="password"
            name="password"
            className={`${inputStyle.base}
            ${
              password !== "" &&
              (isPasswordValid ? inputStyle.okValid : inputStyle.notValid)
            }`}
            value={password}
            onChangeHandler={changePasswordHandler}
          />
        </Label>
        <Label>...</Label>
      </div>
      <div>
        <Label>
          비밀번호 확인
          <Input
            type="password"
            name="passwordConfirm"
            className={`${inputStyle.base}
          ${
            passwordConfirm !== "" &&
            (isPasswordConfirmValid ? inputStyle.okValid : inputStyle.notValid)
          }`}
            value={passwordConfirm}
            onChangeHandler={changePasswordConfirmHandler}
          />
        </Label>
        <Label>...</Label>
      </div>
      <div>
        <Label>
          휴대폰인증
          <Input name="phone" className={inputStyle.base} />
          {/* <Button
          size="small"
          label="인증"
          onClickHandler={() => {
            setTrigger(true);
          }}
        /> */}
        </Label>
        <button onClick={() => setTrigger(true)}>인증</button>
        <Label>{trigger && <Timer maxTime={10} trigger={trigger} />}</Label>
      </div>
      <div>
        <Label>
          인증확인
          <Input name="phoneConfirm" className={inputStyle.base} />
          {/* <Button size="small" label="확인" /> */}
        </Label>
        <Label>...</Label>
      </div>

      <div>
        <button type="submit">가입하기</button>
        {/* <Button type="submit" size="large" label="가입하기" /> */}
      </div>
    </form>
  );
};

export default SignupForm;
