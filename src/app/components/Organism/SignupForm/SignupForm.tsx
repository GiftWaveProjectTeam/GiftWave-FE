"use client";
import { Button, AuthInput, LabelInput } from "@components";
import { useForm } from "@hooks";
import { formValidator } from "@utils";

const SignupForm = () => {
  const { values, errors, changeHandler, submitHandler } = useForm({
    initialValues: {
      userId: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async () => {},
    validate: ({ userId, password, passwordConfirm }) => {
      const errors: { [key: string]: string } = {};

      if (!formValidator.validateUserId(userId)) {
        errors.userId = "아이디 형식에 맞지 않습니다. ";
      }

      if (!formValidator.validatePassword(password)) {
        errors.password = "비밀번호 형식에 맞지 않습니다.";
      }

      if (!formValidator.validatePasswordConfirm(password, passwordConfirm)) {
        errors.passwordConfirm = "비밀번호와 같지 않습니다.";
      }
      return errors;
    },
  });

  return (
    <form data-testid="submit-form" onSubmit={submitHandler}>
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
      <LabelInput
        name="passwordConfirm"
        label="비밀번호 확인"
        type="password"
        value={values.passwordConfirm}
        isValid={errors.passwordConfirm ? false : true}
        error={errors.passwordConfirm}
        onChangeHandler={changeHandler}
      />
      <AuthInput label="휴대폰인증" name="phone" />
      <div>
        <Button type="submit" size="large" label="가입하기" />
      </div>
    </form>
  );
};

export default SignupForm;
