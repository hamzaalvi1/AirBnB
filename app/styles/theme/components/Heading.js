import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { nunito } from "@/app/components/Fonts";

const primary = defineStyle({
  fontFamily: nunito.style.fontFamily,
  fontWeight: "semibold",
  fontSize: "2xl",
  marginBlock:"10px"
});

export default defineStyleConfig({
  variants: {
    primary: primary,
  },
});
