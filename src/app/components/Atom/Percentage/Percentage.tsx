"use client";

import { useEffect, useState } from "react";
import { container, percentbar } from "./Percentage.css";

interface PercentageProps {
  maxAmount: number;
  curAmount: number;
}

const Percentage = ({ maxAmount, curAmount }: PercentageProps) => {
  const [curWidth, setCurWdith] = useState(0);

  useEffect(() => {
    const newCurWdith = Math.floor((curAmount / maxAmount) * 150);
    setCurWdith(newCurWdith);
  }, [maxAmount, curAmount]);

  console.log(curWidth);
  return (
    <div className={container}>
      <div
        className={percentbar}
        style={{
          width: `${curWidth}px`,
        }}
      ></div>
    </div>
  );
};

export default Percentage;
