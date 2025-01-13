import AllBlog from "@/app/component/layers/AllBlog";
import Bannar from "@/app/component/layers/Bannar";
import Brands from "@/app/component/layers/Brands";
import CustomBuild from "@/app/component/layers/CustomBuild";
import CustomSeries from "@/app/component/layers/CustomSeries";
import CustomSeriesTitle from "@/app/component/layers/CustomSeriesTitle";
import NewProduct from "@/app/component/layers/NewProduct";
import TestiMonial from "@/app/component/layers/TestiMonial";
import Zip from "@/app/component/layers/Zip";
import Support from "./component/layers/Support";

const page = () => {
  return (
    <>
      <Bannar />
      <NewProduct className="my-5" />
      <Zip />
      <CustomBuild className="my-5" category="pc" brand="amd" />
      <CustomSeriesTitle
        s1="MSI GS Series"
        s2="MSI GT Series"
        s3="MSI GL Series"
        s4="MSI GE Series"
      />
      <CustomSeries
        className="my-5"
        seriesImage="bg-msiseries"
        seriesTitle="MSI Laptops"
        seriesLink="#"
        category="laptop"
        brand="msi"
      />
      <CustomSeriesTitle
        s1="MSI Infinute Series"
        s2="MSI Triden"
        s3="MSI GL Series"
        s4="MSI Nightblade"
      />
      <CustomSeries
        className="my-5"
        seriesImage="bg-msidesktop"
        seriesTitle="MSI Desktops"
        seriesLink="#"
        category="desktop"
        brand="msi"
      />
      <CustomSeries
        seriesImage="bg-gamingmonitor"
        seriesTitle="Gaming Monitors"
        seriesLink="#"
        category="monitor"
      />
      <Brands className="mt-[66px] mb-[78px]" />
      <AllBlog />
      <TestiMonial className="mt-[106px] mb-[60px]" />
      <Support />
    </>
  );
};

export default page;
