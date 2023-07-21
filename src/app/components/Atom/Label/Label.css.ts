import { vars } from "@/app/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  fontSize: 16,
  color: "black",
});

export const sizeVariants = styleVariants({
  small: [
    base,
    {
      fontSize: vars.text.M_14.fontSize,
    },
  ],
  medium: [
    base,
    {
      fontSize: vars.text.M_16.fontSize,
    },
  ],
  large: [
    base,
    {
      fontSize: vars.text.M_18.fontSize,
    },
  ],
});

export const weightVariants = styleVariants({
  thin: [
    base,
    {
      fontWeight: 300,
    },
  ],
  medium: [
    {
      fontWeight: 500,
    },
  ],
  bold: [
    base,
    {
      fontWeight: 800,
    },
  ],
});

export const error = style({
  color: "red",
});
