import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { inter, nunito } from "@/components/Fonts";
import "@/styles/global.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
