import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FooterMenu from "./component/FooterMenu";
import Background from "./component/Background";
import Carmain from "./component/Carmain";
import CarTypes from "./component/CarTypes";
import CarGalleries from './component/CarGalleries'

const bai = Bai_Jamjuree({ 
  subsets: ["latin"],
  weight: '500'});


export const metadata = {
  title: "Home",
  description: "Hi Tech Multipurpose Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bai.className}>
        <Navbar/>
        <main className="min-h-[65vh] bg-white">
          <Background/>
          <Carmain/>
          <CarTypes/>
          <CarGalleries/>
          {children}
        </main>
        <Footer/>
        <FooterMenu/>
       
        </body>
    </html>
  );
}
