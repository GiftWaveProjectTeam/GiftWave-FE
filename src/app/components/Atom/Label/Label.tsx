import { ComponentPropsWithRef, ReactNode } from "react";
import * as styles from "./Label.css";

interface LabelProps extends ComponentPropsWithRef<"label"> {
  children: ReactNode;
  className?: string;
  onDrag?: (event: React.DragEvent<HTMLLabelElement>) => void;
  onDrop?: (event: React.DragEvent<HTMLLabelElement>) => void;
  size: "small" | "medium" | "large";
  weight?: "thin" | "bold";
}

const Label = ({
  children,
  className,
  onDrag,
  onDrop,
  size,
  weight,
}: LabelProps) => {
  return (
    <label
      className={
        weight
          ? `${styles.sizeVariants[size]} ${styles.weightVariants[weight]}`
          : `${styles.sizeVariants[size]}`
      }
      onDrag={onDrag}
      onDrop={onDrop}
    >
      {children}
    </label>
  );
};

export default Label;
