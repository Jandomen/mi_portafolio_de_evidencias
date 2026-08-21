import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alejandro Serrano Teran | Fullstack Developer & Cybersecurity",
  description:
    "Portafolio de Alejandro Serrano Teran: desarrollador fullstack y especialista en ciberseguridad. Proyectos, experiencia y tecnologías.",
  keywords: [
    "Alejandro Serrano Teran",
    "fullstack developer",
    "ciberseguridad",
    "portafolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Alejandro Serrano Teran" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
