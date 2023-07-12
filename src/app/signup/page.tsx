import { SignupForm } from "../components";
import * as styles from "../styles/signup.css";

export default function SignupPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SignupForm />
      </div>
    </div>
  );
}
