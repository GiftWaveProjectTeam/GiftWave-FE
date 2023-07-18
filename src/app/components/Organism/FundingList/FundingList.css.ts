import { style } from "@vanilla-extract/css";

export const boxContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
  gap: "10px",
});

export const arrowLeft = style({
  fontSize: "50px",
  fontWeight: "200",
  color: "lightgray",
  marginRight: 30,
});
export const arrowRight = style({
  fontSize: "50px",
  fontWeight: "200",
  color: "lightgray",
  marginLeft: 30,
});
