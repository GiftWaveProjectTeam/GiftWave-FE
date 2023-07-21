import classNames from "classnames";
import * as styles from "./InputBox.css";

interface InputBoxProps {
  children: React.ReactNode;
  value?: string;
  showValid?: boolean;
  isValid?: boolean;
}

const InputBox = ({
  children,
  value = "",
  showValid = false,
  isValid = false,
}: InputBoxProps) => {
  return (
    <>
      {showValid === false ? (
        <div className={styles.base}>{children}</div>
      ) : (
        <div
          className={classNames(
            value === "" && styles.base,
            value !== "" && (isValid ? styles.okValid : styles.notValid)
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default InputBox;
