"use client";

import { useForm } from "@/app/hooks";
import { Button, LabelInput } from "@components";
import SocialLogin from "../../Molecule/SocialLogin/SocialLogin";

const LoginForm = () => {
  const { values, errors, changeHandler, submitHandler } = useForm({
    initialValues: {
      userId: "",
      password: "",
    },
    onSubmit: async () => {},
  });

  return (
    <>
      <form onSubmit={submitHandler}>
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
          value={values.password}
          isValid={errors.password ? false : true}
          error={errors.password}
          onChangeHandler={changeHandler}
        />
        <Button size="large" label="로그인" />
      </form>
      <SocialLogin />
    </>
  );
};

export default LoginForm;
