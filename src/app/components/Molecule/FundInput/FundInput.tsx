import React, { ReactNode } from "react";
import * as style from "./FundInput.css";
import { Text } from "@components";

interface FundInputProps {
  label: string;
  children: ReactNode;
  required?: boolean;
}

export default function FundInput({
  label,
  children,
  required,
}: FundInputProps) {
  return (
    <label className={style.wrapper}>
      <div className={style.title}>
        <Text type="inputTitle">
          {label}
          {required ? <span className={style.aster}>*</span> : null}
        </Text>
      </div>
      <div className={style.contents}>{children}</div>
    </label>
  );
}
