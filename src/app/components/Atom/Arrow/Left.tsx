import * as styles from "./Arrow.css";

interface ArrowProps {
  onClick: () => void;
}

const Left = ({ onClick }: ArrowProps) => {
  return (
    <svg
      className={styles.base}
      onClick={onClick}
      viewBox="0 0 17 32"
      fill="none"
    >
      <path
        d="M16.3536 1.35355C16.5488 1.15829 16.5488 0.841709 16.3536 0.646447C16.1583 0.451184 15.8417 0.451184 15.6464 0.646447L16.3536 1.35355ZM1 16L0.646447 15.6464L0.292893 16L0.646447 16.3536L1 16ZM15.6464 0.646447L0.646447 15.6464L1.35355 16.3536L16.3536 1.35355L15.6464 0.646447ZM0.646447 16.3536L15.6464 31.3536L16.3536 30.6464L1.35355 15.6464L0.646447 16.3536Z"
        fill="black"
      />
    </svg>
  );
};
export default Left;
