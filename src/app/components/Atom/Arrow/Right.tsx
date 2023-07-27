import * as styles from "./Arrow.css";

interface ArrowProps {
  onClick: () => void;
}

const Right = ({ onClick }: ArrowProps) => {
  return (
    <svg
      className={styles.base}
      onClick={onClick}
      viewBox="0 0 17 32"
      fill="none"
    >
      <path
        d="M0.646446 1.35355C0.451184 1.15829 0.451184 0.841709 0.646446 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L0.646446 1.35355ZM16 16L16.3536 15.6464L16.7071 16L16.3536 16.3536L16 16ZM1.35355 0.646447L16.3536 15.6464L15.6464 16.3536L0.646446 1.35355L1.35355 0.646447ZM16.3536 16.3536L1.35355 31.3536L0.646446 30.6464L15.6464 15.6464L16.3536 16.3536Z"
        fill="black"
      />
    </svg>
  );
};

export default Right;
