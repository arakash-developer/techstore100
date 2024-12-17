import Navbar from "./component/Navbar";

export const metadata = {
  title: "TechStore",
  description:
    "TechStore is a tech eCommerce platform built with Next.js, Redux, and GSAP, delivering a fast, interactive, and responsive shopping experience. With smooth animations and efficient state management, TechStore offers an intuitive, engaging interface for tech enthusiasts—crafted by Atiqur Rahman Akash.",
};

export default  function RootLayout({ children, params }) {
  const { id } =  params;
  return (
    <>
      <Navbar id={id}/>
      {children}
    </>
  );
}
