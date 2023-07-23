import { createGlobalTheme } from "@vanilla-extract/css";

const fontWeight = {
  extraBold: "800",
  bold: "700",
  semiBold: "600",
  medium: "500",
  regular: "400",
};

const textStyle = {
  R_12: {
    fontSize: "12px",
    fontWeight: fontWeight.regular,
  },
  R_14: {
    fontSize: "14px",
    fontWeight: fontWeight.regular,
  },
  R_16: {
    fontSize: "16px",
    fontWeight: fontWeight.regular,
  },
  R_20: {
    fontSize: "20px",
    fontWeight: fontWeight.regular,
  },
  M_12: {
    fontSize: "12px",
    fontWeight: fontWeight.medium,
  },
  M_14: {
    fontSize: "14px",
    fontWeight: fontWeight.medium,
  },
  M_16: {
    fontSize: "16px",
    fontWeight: fontWeight.medium,
  },
  M_18: {
    fontSize: "18px",
    fontWeight: fontWeight.medium,
  },
  SB_18: {
    fontSize: "18px",
    fontWeight: fontWeight.semiBold,
  },
  B_18: {
    fontSize: "18px",
    fontWeight: fontWeight.bold,
  },
  B_20: {
    fontSize: "20px",
    fontWeight: fontWeight.bold,
  },
  B_30: {
    fontSize: "30px",
    fontWeight: fontWeight.bold,
  },

  EB_40: {
    fontSize: "40px",
    fontWeight: fontWeight.extraBold,
  },
};

const palettle = {
  title: "#353535",
  sub: "#667085",
  navy: "#2D3145",
  blue: "#0366FF",
  blue_tin_1: "#8AC0FF",
  blue_tin_2: "#BBD3F9",
  red: "red",
  white: "#FFFFFF",
  gray_BF: "#BFBFBF",
  gray_E6: "#E6E6E6",
  gray_DC: "#DCDCDC",
  gray_F7: "#F7F7F7",
};

export const vars = createGlobalTheme(":root", {
  text: textStyle,
  palettle: palettle,
});
