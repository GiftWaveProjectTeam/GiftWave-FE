import { LoginContent } from "@components";
import * as styles from "../../../styles/signup.css";

const LoginTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LoginContent />
      </div>
    </div>
  );
};

export default LoginTemplate;
