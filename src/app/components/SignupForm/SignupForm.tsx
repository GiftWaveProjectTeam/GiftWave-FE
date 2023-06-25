"use client";
import { FormEvent, useState } from "react";
import * as styles from "../../styles/signup.css";

const SignupForm = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [phone, stePhone] = useState<string>("");

  const [isUserIdValid, setIsUserIdValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isPasswordConfirmValid, setIsPaswordConfirmValid] =
    useState<boolean>(false);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  const checkUserIdValid = () => {};

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      userId: e.currentTarget.userId.value,
      password: e.currentTarget.password.value,
      phone: e.currentTarget.phone.value,
    };

    console.log("body", body);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>아이디</label>
        </div>
        <input name="userId" className={styles.input} />
        <div>...</div>
      </div>
      <div>
        <div>
          <label>비밀번호</label>
        </div>
        <input name="password" className={styles.input} />
        <div>...</div>
      </div>
      <div>
        <div>
          <label>비밀번호확인</label>
        </div>
        <input name="passwordConfirm" className={styles.input} />
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
        <div>...</div>
      </div>

      <div>
        <button type="submit">가입하기</button>
      </div>
    </form>
  );
};

export default SignupForm;
