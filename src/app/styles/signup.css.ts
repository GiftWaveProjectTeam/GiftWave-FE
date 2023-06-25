import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "680px",
  margin: "0 auto",
  height: "100vh",
  backgroundColor: "tomato",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const input = style({
  width: "300px",
  borderRadius: "5px",
  border: "1px solid black",
});
