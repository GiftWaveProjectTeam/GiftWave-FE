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
    fontSize: 40,
    fontWeight: 700,
    color: "#000000",
    width: "100%"
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: "#BFBFBF",
    width: "100%"
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#353535"
  },
  amount: {
    fontSize: 18,
    fontWeight: 500,
    color: "#353535",
    width: "100%"
  },
  search: {
    fontSize: 20,
    fontWeight: 400,
    color: "blue"
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#353535"
  }
});
