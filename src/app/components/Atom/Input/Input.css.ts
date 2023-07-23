import { vars } from "@/app/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const base = style({
  outline: "none",
  border: `1px solid ${vars.palettle.gray_E6}`,
  borderRadius: "6px",
  marginTop: "12px",
  width: 320,
  height: 56,
});

export const authStyle = style({
  border: "none",
  outline: "none",
  width: "240px",
  height: "30px",
});

export const search = style({
  border: "none",
  outline: "none",
  marginLeft: "30px",
  width: "100%",
  fontSize: "18px",
  fontWeight: 500,
});

export const signIn = style({
  border: "none",
  width: "100%",
  outline: "none",
  fontSize: vars.text.R_16.fontSize,
  fontWeight: vars.text.R_16.fontWeight,
});

export const phoneInput = style({
  border: "none",
  width: "100%",
  outline: "none",
  fontSize: vars.text.R_16.fontSize,
  fontWeight: vars.text.R_16.fontWeight,
  color: vars.palettle.sub,
});
