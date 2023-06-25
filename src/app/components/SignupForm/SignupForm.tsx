"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import * as styles from "../../styles/signup.css";

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
  const BORDER_RED = "1px solid red";
  const BORDER_GREEN = "1px solid green";

  const updateInputBorderStyle = (
    inputElement: HTMLInputElement,
    isValid: boolean
  ) => {
    isValid === false
      ? (inputElement.style.border = BORDER_RED)
      : (inputElement.style.border = BORDER_GREEN);
  };

  /******************************************************************* */
  /**************************** 유효성 style 반경 *********************/
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      userId: e.currentTarget.userId.value,
      password: e.currentTarget.password.value,
      phone: e.currentTarget.phone.value,
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>아이디</label>
        </div>
        <input
          name="userId"
          className={styles.input}
          value={userId}
          onChange={changeUserIdHandler}
          style={{ outline: "none" }}
        />
        <div>...</div>
      </div>
      <div>
        <div>
          <label>비밀번호</label>
        </div>
        <input
          type="password"
          name="password"
          className={styles.input}
          value={password}
          onChange={changePasswordHandler}
          style={{ outline: "none" }}
        />
        <div>...</div>
      </div>
      <div>
        <div>
          <label>비밀번호확인</label>
        </div>
        <input
          type="password"
          name="passwordConfirm"
          className={styles.input}
          value={passwordConfirm}
          onChange={changePasswordConfirmHandler}
          style={{ outline: "none" }}
        />
        <div>...</div>
      </div>
      <div>
        <div>
          <label>휴대폰인증</label>
        </div>
        <input name="phone" className={styles.input} />
        <button>asdas</button>
        <div>...</div>
      </div>
      <div>
        <div>
          <label>인증확인</label>
        </div>
        <input name="phoneConfirm" className={styles.input} />
        <button>asdasd</button>
        <div>...</div>
      </div>

      <div>
        <button type="submit">가입하기</button>
      </div>
    </form>
  );
};

export default SignupForm;
