import { Geist, Geist_Mono, Itim, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



const itim = Itim ({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: ["400"],
})
const montserrat = Montserrat ({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300","400","500"],
})
const poppins = Poppins ({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600"],
})

export const metadata = {
  title: "LocaTunise",
  description: "Louez facilement des longements partout en Tunisie, a petits  prix et en toute confiance ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${itim.variable} antialiased`}
      >
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
