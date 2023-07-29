import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "100%",
  height: "auto",
});
export const container = style({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const slideContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 400,
});

export const slideWapper = style({
  width: "100%",
  maxWidth: "590px",
  height: "auto",
  overflow: "hidden",
  position: "relative",
  borderRadius: 10,
});

export const slidelItem = style({
  position: "absolute",
  transition: "transform 0.5s ease",
});
