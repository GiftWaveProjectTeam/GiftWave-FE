import { style, styleVariants } from "@vanilla-extract/css";

export const formVariant = styleVariants({
  loginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "cneter",
    alignContent: "center",
    gap: 40,
    width: "100%",
  },

  signupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "cneter",
    alignContent: "center",
    gap: 40,
    width: "100%",
  },
});
