import { vars } from "@/app/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Radio = style({
  width: 155,
  height: 45,
  border: "1px solid #8AC0FF",
  boxSizing: "border-box",
  borderRadius: 6,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  cursor: "pointer",

  ":hover": {
    backgroundColor: vars.palettle.blue,
    color: vars.palettle.white,
  },
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const title = style({
  fontSize: vars.text.M_16.fontSize,
  fontWeight: vars.text.M_16.fontWeight,
  color: vars.palettle.title,
});

export const clicked = style({
  backgroundColor: vars.palettle.blue,
  color: vars.palettle.white,
});
