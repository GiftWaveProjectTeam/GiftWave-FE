import { style } from "@vanilla-extract/css";

export const container = style({
  "::before": {
    content: "이미지를 드래그앤드랍 또는 첨부해주세요.",
    border: "1px solid",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 30,
    width: "342px",
    height: "342px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: 12
  }
});

export const beforeContainer = style({
  width: 342,
  height: 342,
  border: "1px solid #E6E6E6",
  borderRadius: 5,
  overflow: "hidden",
  color: "#E6E6E6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
