import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
  fontWeight: 700,
  border: 0,
  borderRadius: "10px",
  display: "inline-block",
  lineHeight: 1,
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
      fontSize: "16px",
      padding: "12px 24px",
      width: "350px",
    },
  ],
});
