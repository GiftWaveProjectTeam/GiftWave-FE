"use client";

import { useEffect, useState } from "react";
import { container, percentbar } from "./Percentage.css";

interface PercentageProps {
  maxAmount: number;
  curAmount: number;
  isPercent: boolean;
}

const Percentage = ({
  maxAmount = 0,
  curAmount = 0,
  isPercent = false,
}: PercentageProps) => {
  const [curWidth, setCurWdith] = useState(0);
  const [percent, setPercent] = useState(0);

  if (curAmount > maxAmount) curAmount = maxAmount;

  useEffect(() => {
    const newCurWdith = Math.floor((curAmount / maxAmount) * 150);
    const newPercent = Math.floor((curAmount / maxAmount) * 100);
    setPercent(newPercent);
    setCurWdith(newCurWdith);
  }, [maxAmount, curAmount]);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div>
        <div className={container}>
          <div
            className={percentbar}
            style={{
              width: `${curWidth}px`,
            }}
          ></div>
        </div>
      </div>
      {isPercent === true && (
        <div style={{ marginLeft: "10px" }}>{percent} %</div>
      )}
    </div>
  );
};

export default Percentage;
