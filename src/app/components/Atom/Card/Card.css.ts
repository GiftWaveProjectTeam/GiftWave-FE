import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  width: 342,
  height: 342,
  border: "none",
  boxSizing: "border-box",
});

export const cardVariants = styleVariants({
  popular: [
    base,
    {
      width: 268,
      height: 399,
      border: "1px solid #000000",
      borderRadius: 10,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
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
