import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from '@/app/component/layers/Navbar'
import Footer from "./component/pages/Footer";

const popins = Poppins({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${popins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
