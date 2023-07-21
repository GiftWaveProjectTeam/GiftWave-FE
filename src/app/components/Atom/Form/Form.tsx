import { formVariant } from "./Form.css";

interface FormProps {
  children?: React.ReactNode;
  type: "loginForm" | "signupForm";
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form = ({ children, type, onSubmit }: FormProps) => {
  return (
    <form className={formVariant[type]} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
