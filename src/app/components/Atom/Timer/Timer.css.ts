import { style, styleVariants } from "@vanilla-extract/css";

export const TimerVariant = styleVariants({
  seconds: {
    fontSize: "14px",
    width: "3.6em",
    color: "gray",
  },
  minutes: {
    fontSize: "14px",
    width: "3.6em",
    color: "gray",
  },
  hours: {
    fontSize: "14px",
    width: "5.5em",
    color: "gray",
  },
});
