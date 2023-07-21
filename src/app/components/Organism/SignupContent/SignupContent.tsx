"use client";
import { Button, Form, LabelInput, Text } from "@components";
import { useForm } from "@hooks";
import { formValidator } from "@utils";
import PhoneAuth from "../PhoneAuth/PhoneAuth";
import * as styles from "./SignupContent.css";
import { useState } from "react";

const SignupContent = () => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const { values, errors, changeHandler, submitHandler } = useForm({
    initialValues: {
      userId: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async ({ userId, password }) => {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userId,
          password: password,
          phone_number: "",
          gender: "",
          birthday: "",
        }),
      });
    },
    validate: ({ userId, password, passwordConfirm }) => {
      const errors: { [key: string]: string } = {};

      if (!formValidator.validateUserId(userId)) {
        errors.userId = "8~30자 이내, 영문 숫자 조합으로 만들어주세요.";
      }

      if (!formValidator.validatePassword(password)) {
        errors.password = "8~ 15자, 특수문자(!@#$%&),숫자 필수입니다.";
      }

      if (!formValidator.validatePasswordConfirm(password, passwordConfirm)) {
        errors.passwordConfirm = "비밀번호와 같지 않습니다.";
      }
      return errors;
    },
  });

  return (
    <>
      <div className={styles.margin}>
        <Text type="signinComment">회원가입</Text>
      </div>
      <Form type="signupForm" onSubmit={submitHandler}>
        <LabelInput
          name="userId"
          label="아이디"
          value={values.userId}
          isValid={errors.userId ? false : true}
          error={errors.userId}
          onChangeHandler={changeHandler}
          maxLength={30}
        />
        <LabelInput
          name="password"
          label="비밀번호"
          type="password"
          value={values.password}
          isValid={errors.password ? false : true}
          error={errors.password}
          onChangeHandler={changeHandler}
          hidden={true}
          maxLength={15}
        />
        <LabelInput
          name="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          value={values.passwordConfirm}
          isValid={errors.passwordConfirm ? false : true}
          error={errors.passwordConfirm}
          onChangeHandler={changeHandler}
          hidden={true}
          maxLength={15}
        />
        <PhoneAuth setIsConfirm={setIsConfirm} />
        <Button type="submit" size="large" color="signIn" label="회원가입" />
      </Form>
    </>
  );
};

export default SignupContent;
