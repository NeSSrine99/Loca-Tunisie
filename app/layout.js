import { Geist, Geist_Mono, Itim, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata = {
  title: "LocaTunisie",
  description:
    "Louez facilement des logements partout en Tunisie, à petits prix et en toute confiance.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${itim.variable} ${montserrat.variable}`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="https://loca-tunisie-three.vercel.app/" />
      </head>
      <body className="antialiased">
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
