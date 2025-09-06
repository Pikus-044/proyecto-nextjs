'use client'

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="forest">
      
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}