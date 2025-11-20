import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata = {
  title: "Cantos do Mundo | Viagens com Alma e Roteiros Personalizados",
  description: "Agência de viagens especializada em roteiros personalizados e experiências transformadoras. Descubra a Patagônia, Toscana, Turquia e muito mais.",
  openGraph: {
    title: "Cantos do Mundo | Viagens com Alma",
    description: "Roteiros curados com sensibilidade para quem busca mais do que apenas visitar um lugar.",
    url: "https://cantosdomundotur.com.br",
    siteName: "Cantos do Mundo",
    images: [
      {
        url: "/images/logo-institucional.svg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Cantos do Mundo Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/bird.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} bg-brisa overflow-x-hidden bg-noise`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
