import { style } from "@vanilla-extract/css";

export const Hidden = style({
  opacity: 0.6,
  cursor: "pointer",
  ":hover": {
    opacity: 1,
  },
});
