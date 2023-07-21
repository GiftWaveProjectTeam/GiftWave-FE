import { vars } from "@/app/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const margin = style({
  marginBottom: "60px",
});

export const subMenu = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px",

  fontSize: vars.text.R_14.fontSize,
  fontWeight: vars.text.R_14.fontWeight,
  color: vars.palettle.sub,
  cursor: "pointer",
});

export const hover = style({
  ":hover": {
    color: vars.palettle.title,
  },
});
