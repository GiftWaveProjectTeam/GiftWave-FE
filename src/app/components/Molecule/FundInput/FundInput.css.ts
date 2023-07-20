import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  height: "fit-content",
  padding: 5,
  margin: 5
});

export const title = style({
  display: "flex"
  //   border: "1px solid"
});

export const contents = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

export const aster = style({
  color: "#FF4555"
});
