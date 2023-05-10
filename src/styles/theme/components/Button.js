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

const oAuth = {
  fontSize: "md",
  fontWeight: "semibold",
  minHeight: "50px",
  minWidth: "100%",
  fontWeight: "500",
  height: "100%",
  cursor: "pointer",
  marginBlock: "10px",
  border: "2px solid #000",
  position: "relative",
};

export default defineStyleConfig({
  variants: { primary, oAuth },
});
