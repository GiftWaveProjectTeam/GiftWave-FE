"use client";

import { useForm } from "@/app/hooks";
import { Button, Form, LabelInput, Text } from "@components";

import * as styles from "./LoginContent.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const LoginContent = () => {
  const { values, errors, changeHandler, submitHandler } = useForm({
    initialValues: {
      userId: "",
      password: "",
    },
    onSubmit: async () => {},
  });

  return (
    <>
      <div>
        <div className={styles.margin}>
          <Text type="signinComment">로그인</Text>
        </div>
        <Form onSubmit={submitHandler} type="loginForm">
          <LabelInput
            name="userId"
            label="아이디"
            value={values.userId}
            isValid={errors.userId ? false : true}
            error={errors.userId}
            onChangeHandler={changeHandler}
          />
          <LabelInput
            name="password"
            label="비밀번호"
            type="password"
            hidden={true}
            value={values.password}
            isValid={errors.password ? false : true}
            error={errors.password}
            onChangeHandler={changeHandler}
          />
          <Button type="submit" size="large" color="signIn" label="회원가입" />
        </Form>
        <div className={styles.subMenu}>
          <span className={styles.hover}>비밀번호 찾기</span>
          <span>|</span>
          <span className={styles.hover}>아이디 찾기</span>
          <span>|</span>
          <span className={styles.hover}>회원가입</span>
        </div>
        <SocialLogin />
      </div>
    </>
  );
};

export default LoginContent;
