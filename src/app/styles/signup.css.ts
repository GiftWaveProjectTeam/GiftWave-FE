import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "680px",
  margin: "0 auto",
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const input = style({
  width: "300px",
  borderRadius: "5px",
  border: "1px solid black",
});
