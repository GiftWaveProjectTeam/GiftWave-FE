import { ComponentPropsWithRef, ReactNode } from "react";
import * as styles from "./Label.css";

interface LabelProps extends ComponentPropsWithRef<"label"> {
  children: ReactNode;
  className?: string;
  onDrag?: (event: React.DragEvent<HTMLLabelElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLLabelElement>) => void;
  size: "small" | "medium" | "large";
  weight?: "thin" | "medium" | "bold";
  error?: boolean;
}

const Label = ({
  children,
  className,
  onDrag,
  onDrop,
  size,
  weight,
  error,
}: LabelProps) => {
  return (
    <label
      className={`${error ? styles.error : ""} ${
        weight ? styles.weightVariants[weight] : ""
      } ${styles.sizeVariants[size]}`}
      onDrag={onDrag}
      onDrop={onDrop}
    >
      {children}
    </label>
  );
};

export default Label;
