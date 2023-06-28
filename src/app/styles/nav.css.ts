import { style } from "@vanilla-extract/css";

export const navCotainer = style({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 2fr 1fr",
  padding: "12px",
  whiteSpace: "pre-wrap",
});

export const gridItem = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MenuContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  whiteSpace: "pre-wrap",
});

export const ButtonBar = style({
  display: "flex",
  justifyContent: "right",
});
