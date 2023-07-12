import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  width: 342,
  height: 342,
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const cardVariants = styleVariants({
  popular: [
    base,
    {
      width: 268,
      height: 399,
      border: "1px solid #000000",
      borderRadius: 10,
    },
  ],
  recommend: [
    base,
    {
      height: 407,
      borderRadius: 6,
    },
  ],
  search: [
    base,
    {
      height: 452,
    },
  ],
  celebrate: [
    base,
    {
      height: 250,
      border: "1.97px solid #BFBFBF",
      borderRadius: 10,
    },
  ],
});
