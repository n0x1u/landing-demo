import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Inter para textos y precios
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Poppins para títulos
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PlayGame — Juguetes y juegos para todas las edades",
  description:
    "Juguetes, juegos de mesa y desafíos para chicos y grandes. Encontrá tu próximo juego favorito en PlayGame.",
};

export const viewport: Viewport = {
  themeColor: "#17284d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
