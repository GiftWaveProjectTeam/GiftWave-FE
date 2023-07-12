"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button, AuthInput, LabelInput } from "@components";

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

  return (
    <form data-testid="submit-form" onSubmit={handleSubmit}>
      <LabelInput
        label="아이디"
        value={userId}
        isValid={isUserIdValid}
        error="아이디 형식이 맞지 않습니다."
        onChangeHandler={changeUserIdHandler}
      />
      <LabelInput
        label="비밀번호"
        value={password}
        isValid={isPasswordValid}
        error="비밀번호 형식이 맞지 않습니다."
        onChangeHandler={changePasswordHandler}
      />
      <LabelInput
        label="비밀번호 확인"
        value={passwordConfirm}
        isValid={isPasswordConfirmValid}
        error="비밀번호가 맞지 않습니다."
        onChangeHandler={changePasswordConfirmHandler}
      />
      <AuthInput label="휴대폰인증" name="phone" />
      <div>
        <Button type="submit" size="large" label="가입하기" />
      </div>
    </form>
  );
};

export default SignupForm;
