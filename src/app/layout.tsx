import { Metadata } from "next";
import "./globalStyle.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Gift Wave",
  description: "Gift Crowd Funding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
