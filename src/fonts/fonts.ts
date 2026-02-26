import { Poppins, Cormorant_Garamond, Montserrat } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "800", "900"],
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  // No layout: 100 (fino) para o texto branco e 800 (extra-bold) para o azul
  weight: ['100', '200', '400', '800'],
  variable: '--font-montserrat',
});
