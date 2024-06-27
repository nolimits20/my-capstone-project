import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FooterMenu from "./component/FooterMenu";
import { SidebarProvider } from "./providers";


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
        <SidebarProvider>
        <Navbar/>
        <main className="min-h-[65vh] bg-white">
          
          {children}
        </main>
        <Footer/>
        <FooterMenu/>
        </SidebarProvider>
        
       
        </body>
    </html>
  );
}
