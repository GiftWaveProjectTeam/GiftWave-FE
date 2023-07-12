import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  width: 500,
  height: 80,
});

export const Container = style({
  display: "flex",
  flexDirection: "column",
});

export const RowInput = style({
  display: "flex",
  flexDirection: "row",
});

export const InputButtonBox = style({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
});

export const TimerInputBox = style({
  border: "1px solid black",
  width: "350px",
  borderRadius: "5px",
  padding: "2px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
