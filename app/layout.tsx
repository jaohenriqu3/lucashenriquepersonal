import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Lucas Henrique | Especialista em Hipertrofia",
    template: "%s | Personal Trainer",
  },
  description: "Treinamento estruturado e acompanhamento constante para evolução muscular real. Agende sua consulta.",
  keywords: ["personal trainer", "hipertrofia", "musculação", "treino online", "consultoria fitness"],
  authors: [{ name: "Lucas Henrique" }],
  openGraph: {
    title: "Lucas Henrique | Especialista em Hipertrofia",
    description: "Consultoria presencial e online.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

