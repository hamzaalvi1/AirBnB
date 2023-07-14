import { Providers } from "@/app/components/Providers";
import { Header } from "@/app/components/Header";
import { nunito } from "@/app/components/Fonts";
import "@/app/styles/global.css";

export const metadata = {
  title: "Homme.",
  description: "Homme. your hotel reservation app",
};
export default async function RootLayout({ children }) {
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
