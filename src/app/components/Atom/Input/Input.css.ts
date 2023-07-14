import { createVar, style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  outline: "none",
  borderRadius: "5px",
  border: "1px solid black",
  width: "350px",
  height: "36px",
});

export const okValid = style([
  {
    borderColor: "green",
  },
]);

export const notValid = style([
  {
    borderColor: "red",
  },
]);

export const AuthStyle = style({
  border: "none",
  outline: "none",
  width: "240px",
  height: "30px",
});
