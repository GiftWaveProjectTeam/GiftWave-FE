import { vars } from "@/app/styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  marginBottom: "40px",
});

export const ibContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "12px",
});

export const columnInput = style({
  display: "flex",
  flexDirection: "column",
  height: 100,
});

export const baseInput = style({
  border: `1px solid ${vars.palettle.gray_E6}`,
  borderRadius: "6px",
  outline: "none",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  boxSizing: "border-box",
});

export const innerInput = style({
  width: "100%",
  height: 56,
});

export const confirmInput = style({
  width: "100%",
  height: 56,
  gap: 8,
});

export const errorInput = style({
  border: `1px solid ${vars.palettle.red}`,
});

export const successInput = style({
  border: `1px solid ${vars.palettle.blue_tin_2}`,
});

export const boxMargin = style({
  marginTop: 12,
});
