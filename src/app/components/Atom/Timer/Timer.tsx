import { useInterval } from "@/src/app/hooks/useInterval";
import { useState } from "react";
import React from "react";

interface TimerProps {
  maxTime: number;
  trigger: boolean;
  mode?: string;
}

const Timer = ({ maxTime, trigger, mode = "minutes" }: TimerProps) => {
  const [timer, setTimer] = useState<number>(maxTime);

  const hours = Math.floor(timer / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  if (timer === 0) {
    trigger = false;
  }
  useInterval(
    () => {
      setTimer(timer - 1);
    },
    1000,
    trigger
  );

  return (
    <div>
      {mode === "hours" &&
        (hours !== "0" ? <span>{hours} : </span> : <span>00 : </span>)}
      {minutes !== "0" ? <span>{minutes} : </span> : <span>00 : </span>}
      {seconds !== "0" ? <span>{seconds}</span> : <span>00</span>}
    </div>
  );
};

export default Timer;
