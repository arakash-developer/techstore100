import "./globals.css";
import { Poppins } from 'next/font/google'
import Navbar from '@/app/component/layers/Navbar'
import Footer from "./component/layers/Footer";
import StoreProvider from "./StoreProvider";

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: "TechStore",
  description: "TechStore is a tech eCommerce platform built with Next.js, Redux, and GSAP, delivering a fast, interactive, and responsive shopping experience. With smooth animations and efficient state management, TechStore offers an intuitive, engaging interface for tech enthusiasts—crafted by Atiqur Rahman Akash.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${popins.className} overflow-x-hidden`}>
        <StoreProvider>
            <Navbar />
              {children}
            <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
