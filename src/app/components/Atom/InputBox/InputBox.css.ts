import { vars } from "@/app/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const base = style({
  width: "100%",
  height: 56,
  border: `1px solid ${vars.palettle.gray_E6}`,
  borderRadius: "6px",
  marginTop: "12px",
  outline: "none",

  display: "flex",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
});

export const okValid = style([
  base,
  {
    borderColor: vars.palettle.blue_tin_1,
  },
]);

export const notValid = style([
  base,
  {
    borderColor: vars.palettle.red,
  },
]);
