import { extendTheme } from "@chakra-ui/react";
import { MenuTheme, ModalTheme, HeadingTheme, ButtonTheme } from "./components";

const colors = {
  primaryColor: "#00B5D8",
  primaryFont: "Nunito",
  borderColor: "#dddddd",
  darkGrey: "#717171",
  lightGrey: "#ccc",
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};
// components

const components = {
  Menu: MenuTheme,
  Modal: ModalTheme,
  Heading: HeadingTheme,
  Button: ButtonTheme,
};
export const theme = extendTheme({
  colors,
  fontWeights,
  fontSizes,
  components,
});
