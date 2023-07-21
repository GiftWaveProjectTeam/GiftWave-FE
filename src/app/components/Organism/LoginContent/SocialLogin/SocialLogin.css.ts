import { style } from "@vanilla-extract/css";

export const loginBox = style({
  width: 320,

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 3,
  gap: 30,
  marginTop: 20,
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 60,
});
