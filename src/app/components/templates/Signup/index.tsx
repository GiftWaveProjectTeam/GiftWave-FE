import { SignupContent } from "@components";
import * as styles from "../../../styles/signup.css";

const SignupTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SignupContent />
      </div>
    </div>
  );
};

export default SignupTemplate;
