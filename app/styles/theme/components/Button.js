import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  color: "#fff",
  backgroundColor: "primaryColor",
  width: "100%",
  display: "block",
  cursor: "pointer",
  minHeight: "50px",
  fontSize: "md",
  marginBlock: "20px",
});

const secondary = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  color: "#000",
  backgroundColor: "transparent",
  width: "100%",
  display: "block",
  cursor: "pointer",
  minHeight: "50px",
  fontSize: "md",
  border: "2px solid",
  borderColor: "#000",
  marginBlock: "20px",
});

const oAuth = {
  fontSize: "md",
  fontWeight: "bold",
  minHeight: "50px",
  minWidth: "100%",
  fontWeight: "500",
  height: "100%",
  cursor: "pointer",
  marginBlock: "10px",
  border: "2px solid #000",
  position: "relative",
  borderRadius: "lg",
};

export default defineStyleConfig({
  variants: { primary, oAuth, secondary },
});
