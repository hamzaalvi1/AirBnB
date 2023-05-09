import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style

  dialog: {
    borderRadius: "md",
  },
  closeButton: {
    right: "unset",
    left: "0.75rem",
  },
  header: {
    textAlign: "center",
    borderBottom: "1px solid",
    borderBottomColor: "#e3e3e3",
    position: "relative"
  },
});

export default defineMultiStyleConfig({
  baseStyle,
});
