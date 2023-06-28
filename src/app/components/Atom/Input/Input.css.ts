import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  outline: "none",
  borderRadius: "5px",
  borderStyle: "solid",
  borderWidth: "2px",
  width: "350px",
  height: "30px",
});

export const okValid = style([
  base,
  {
    borderColor: "green",
  },
]);

export const notValid = style([
  base,
  {
    borderColor: "red",
  },
]);

export const brandColor = createVar();

export const InputColor = style({
  borderColor: brandColor,
});
