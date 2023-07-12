import * as styles from "../styles/signup.css";
import SignupForm from "../components/Organism/SignupForm/SignupForm";

export default function SignupPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SignupForm />
      </div>
    </div>
  );
}
