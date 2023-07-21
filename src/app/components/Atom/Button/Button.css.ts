import { vars } from "@/app/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  fontWeight: 700,
  border: 0,
  borderRadius: "10px",
  display: "inline-block",
  lineHeight: 1,
  backgroundColor: "oatmeal",
  color: "grey",
  cursor: "pointer",
});

export const sizeVariants = styleVariants({
  small: [
    base,
    {
      fontSize: "12px",
      padding: "10px 16px",
    },
  ],
  medium: [
    base,
    {
      fontSize: "14px",
      padding: "10px 20px",
    },
  ],
  large: [
    base,
    {
      fontSize: vars.text.SB_18.fontSize,
      fontWeight: vars.text.SB_18.fontWeight,
      padding: "12px 24px",
      width: "100%",
      height: "56px",
    },
  ],
  auth: [
    base,
    {
      fontSize: vars.text.R_14.fontSize,
      fontWeight: vars.text.R_14.fontWeight,
      padding: "20px",
      minWidth: 100,
    },
  ],
});

export const colorVariants = styleVariants({
  important: [
    base,
    {
      backgroundColor: "red",
      color: "white",
    },
  ],
  auth: [
    base,
    {
      backgroundColor: "transparent",
      border: `1px solid ${vars.palettle.blue_tin_1}`,
      color: vars.palettle.blue,
    },
  ],
  signIn: [
    {
      color: vars.palettle.white,
      ":hover": {
        backgroundColor: vars.palettle.blue,
      },
    },
  ],
});
