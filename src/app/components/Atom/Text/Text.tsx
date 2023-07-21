"use client";

import { titleVariant } from "./Text.css";

export interface TextProps extends React.ComponentProps<"html"> {
  children: React.ReactNode;
  block?: boolean;
  type:
    | "title"
    | "subTitle"
    | "cardTitle"
    | "amount"
    | "search"
    | "loginComment"
    | "logoutComment"
    | "signinComment"
    | "otherLogin"
    | "RadioButton";
}

const Text = ({ children, block, type }: TextProps) => {
  return (
    <>
      {block ? (
        <div className={titleVariant[type]}>{children}</div>
      ) : (
        <p className={titleVariant[type]}>{children}</p>
      )}
    </>
  );
};

export default Text;
