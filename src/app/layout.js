import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lyncc",
  description: "Lyncc - Making Life better everyday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="app-parent">
      <body id="app-parent" className={inter.className}>{children}</body>
    </html>
  );
}
