"use client";

import { MouseEvent, useCallback, useState } from "react";
import * as styles from "./RadioButton.css";
import classNames from "classnames";
import { Text } from "@components";

export interface RadioButtonProps {
  title: string;
  radio1Name: string;
  radio2Name: string;
  radio: number;
  onRadio1: () => void;
  onRadio2: () => void;
}

const RadioButton = ({
  title,
  radio1Name,
  radio2Name,
  radio,
  onRadio1,
  onRadio2,
}: RadioButtonProps) => {
  return (
    <div className={styles.container}>
      <Text block={true} type="RadioButton">
        {title}
      </Text>
      <div style={{ display: "flex", gap: 10 }}>
        <div
          className={classNames(styles.Radio, radio === 1 && styles.clicked)}
          onClick={onRadio1}
        >
          {radio1Name}
        </div>
        <div
          className={classNames(styles.Radio, radio === 2 && styles.clicked)}
          onClick={onRadio2}
        >
          {radio2Name}
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
