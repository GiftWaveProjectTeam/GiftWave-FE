import { style } from "@vanilla-extract/css";
import { vars } from "@styles/themes.css";

export const navCotainer = style({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 2fr 1fr",
  padding: "12px",
  whiteSpace: "pre-wrap",
  height: 72,
});

export const logoBlock = style({
  cursor: "pointer",
});

export const gridItem = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: vars.text.B_18.fontSize,
  fontWeight: vars.text.B_18.fontWeight,
  cursor: "pointer",

  ":hover": {
    color: vars.palettle.blue,
  },
});

export const menuContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  whiteSpace: "pre-wrap",
});

export const buttonBar = style({
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
});

export const buttonStyle = style({
  padding: "6px 8px",
  fontSize: vars.text.M_14.fontSize,
  fontWeight: vars.text.M_14.fontWeight,
  border: "1px solid #DCDCDC",
  background: "white",
  borderRadius: 4,
  marginLeft: 10,
});

export const commentStyle = style({
  fontSize: vars.text.M_14.fontSize,
  fontWeight: vars.text.M_14.fontWeight,
  color: vars.palettle.gray_BF,
});
