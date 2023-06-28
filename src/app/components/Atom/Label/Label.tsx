import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return (
    <div>
      <label>{children}</label>
    </div>
  );
};

export default Label;
