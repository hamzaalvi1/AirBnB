import { Inter, Nunito } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "500", "400", "600", "700"],

});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
