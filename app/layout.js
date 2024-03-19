import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MnA Studio",
  description:
    "Mna Studio music production and recording studio in London, UK. We offer music production, recording, mixing and mastering services. We also offer music production courses and music production tutorials. We are based in London, UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
