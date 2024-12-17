import Container from "@/app/component/layers/Container";
import Bx from "@/public/bx.png";
import Profile from "@/public/profileIcon.png";
import Saving from "@/public/saving.png";
import SupportItem from "./SupportItem";

const Support = () => {
  return (
    <Container className="flex flex-col md:flex-row justify-center lg:gap-[130px] md:items-start mb-[44px] gap-y-10">
      <SupportItem
        img={Bx}
        h3="Product Support"
        p="Up to 3 years on-site warranty available for your peace of mind."
      />
      <SupportItem
        img={Profile}
        h3="Personal Account"
        p="With big discounts, free delivery and a dedicated support specialist."
      />
      <SupportItem
        img={Saving}
        h3="Amazing Savings"
        p="Up to 70% off new Products, you can be sure of the best price."
      />
    </Container>
  );
};

export default Support;
