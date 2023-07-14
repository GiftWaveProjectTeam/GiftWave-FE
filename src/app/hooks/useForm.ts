import { ChangeEvent, useState } from "react";

interface useFormProps {
  initialValues: { [key: string]: string };
  onSubmit: (values: { [key: string]: string }) => Promise<void>;
  validate?: (values: { [key: string]: string }) => { [key: string]: string };
}

const useForm = ({ initialValues, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;

    //비밀번호는 공백을 포함할 수 있다.
    if (name.includes("password") || name.includes("Password")) {
      setValues({ ...values, [name]: value });
    } else {
      setValues({ ...values, [name]: value.trim() });
    }

    const newValue = { ...values, [name]: value };
    const newErrors = validate ? validate(newValue) : {};

    setErrors(newErrors);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    await onSubmit(values);
  };

  return { values, errors, changeHandler, submitHandler };
};

export default useForm;
