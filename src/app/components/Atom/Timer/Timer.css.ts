import { vars } from "@/app/styles/themes.css";
import { styleVariants } from "@vanilla-extract/css";

export const TimerVariant = styleVariants({
  seconds: {
    fontSize: "14px",
    width: "3.6em",
    color: "gray",
  },
  minutes: {
    fontSize: vars.text.R_16.fontSize,
    fontWeight: vars.text.R_16.fontWeight,
    color: vars.palettle.blue,
    width: "3.6em",
  },
  hours: {
    fontSize: "14px",
    width: "5.5em",
    color: "gray",
  },
});
