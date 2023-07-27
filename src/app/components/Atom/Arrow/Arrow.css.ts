import { style } from "@vanilla-extract/css";

export const base = style({
  opacity: 1,
  cursor: "pointer",
  width: 17,
  height: 32,

  ":hover": {
    opacity: 0.5,
  },
});
