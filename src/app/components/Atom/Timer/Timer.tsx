"use client";

import { useEffect, useState } from "react";
import React from "react";
import { TimerVariant } from "./Timer.css";
import { useInterval } from "@/app/hooks/useInterval";

interface TimerProps {
  maxTime: number;
  mode?: "seconds" | "minutes" | "hours";
  trigger?: boolean;
  setTrigger?: React.Dispatch<React.SetStateAction<boolean>>;
  timeout?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer = ({
  maxTime,
  trigger,
  setTrigger,
  timeout,
  mode = "minutes",
}: TimerProps) => {
  const [timer, setTimer] = useState<number>(maxTime);

  const hours = Math.floor(timer / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  timeout && timer === 0 && timeout(true);

  if (timer === 0) {
    setTrigger && setTrigger(false);
  }
  useInterval(
    () => {
      setTimer(timer - 1);
    },
    1000,
    trigger
  );

  useEffect(() => {
    setTimer(maxTime);
  }, [maxTime]);

  return (
    <div className={TimerVariant[mode]}>
      {mode === "hours" &&
        (hours !== "0" ? <span>{hours} : </span> : <span>00 : </span>)}
      {minutes !== "0" ? <span>{minutes} : </span> : <span>00 : </span>}
      {seconds !== "0" ? <span>{seconds}</span> : <span>00</span>}
    </div>
  );
};

export default Timer;
