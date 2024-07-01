import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henry's Cocktail Bar",
  description: "A Brooklyn bar in Poblenou, Barcelona",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-henrys-beige text-henrys-text p-8 md:p-10 relative`}>{children}</body>
    </html>
  );
}
