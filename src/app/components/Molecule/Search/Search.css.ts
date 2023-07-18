import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
});

export const SeacrhBlock = style({
  width: "890px",
  height: "64px",
  borderRadius: "50px",
  border: "5px solid #4361EE",
  display: "flex",
  alignItems: "center",
});

export const active = style({});

export const activeIndicator = style({
  transition: "transform .3s ease, opacity .3s ease",
  opacity: 1,
  width: "833px",
  height: "249px",
  border: "5px solid #4361EE",
  position: "absolute",
  top: "70px",
  left: "25px",
  zIndex: 9,

  selectors: {
    [`&:not(${active})`]: {
      opacity: 0,
      transform: "translateY(-40%)",
    },
  },
});
