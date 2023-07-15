import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  fontSize: 16,
  color: "black",
});

export const sizeVariants = styleVariants({
  small: [
    base,
    {
      fontSize: "12px",
    },
  ],
  medium: [
    base,
    {
      fontSize: "14px",
    },
  ],
  large: [
    base,
    {
      fontSize: "16px",
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
