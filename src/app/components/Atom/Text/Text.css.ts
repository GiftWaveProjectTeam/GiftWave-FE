import { vars } from "@/app/styles/themes.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const title = style({
  fontSize: 40,
  fontWeight: 700
});

export const subtitle = style({
  fontSize: 16,
  fontWeight: 500,
  color: "#BFBFBF"
});

export const titleVariant = styleVariants({
  title: {
    fontSize: vars.text.EB_40.fontSize,
    fontWeight: vars.text.EB_40.fontWeight,
    color: vars.palettle.title,
    width: "100%"
  },
  subTitle: {
    fontSize: vars.text.R_20.fontSize,
    fontWeight: vars.text.R_20.fontWeight,
    color: vars.palettle.gray_BF,
    width: "100%"
  },
  cardTitle: {
    fontSize: vars.text.B_20.fontSize,
    fontWeight: vars.text.B_20.fontWeight,
    color: vars.palettle.title
  },
  amount: {
    fontSize: vars.text.M_18.fontSize,
    fontWeight: vars.text.M_18.fontWeight,
    color: vars.palettle.title,
    width: "100%"
  },
  search: {
    fontSize: vars.text.R_20.fontSize,
    fontWeight: vars.text.R_20.fontWeight,
    color: "blue"
  },
  loginComment: {
    fontSize: vars.text.M_14.fontSize,
    fontWeight: vars.text.M_14.fontWeight,
    color: vars.palettle.gray_BF
  },
  logoutComment: {
    fontSize: vars.text.M_14.fontSize,
    fontWeight: vars.text.M_14.fontWeight,
    color: vars.palettle.sub
  },
  signinComment: {
    fontSize: vars.text.B_30.fontSize,
    fontWeight: vars.text.B_30.fontWeight,
    color: vars.palettle.title
  },
  otherLogin: {
    fontSize: vars.text.M_14.fontSize,
    fontWeight: vars.text.M_14.fontWeight,
    color: vars.palettle.title
  },
  RadioButton: {
    fontSize: vars.text.M_16.fontSize,
    fontWeight: vars.text.M_16.fontWeight,
    color: vars.palettle.title
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#353535"
  }
});
