import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcumb = ({ className, three }) => {
  return (
    <>
      {/* <div className={` ${className}`}>
        <h2 className="font-bold text-[3.06rem] leading-none text-[#262626] capitalize font-dm">
          {window.location.pathname.split("/")[1]}
        </h2>
        <p className="mt-3 font-normal text-xs text-[#767676] font-dm capitalize">
          Home <MdKeyboardArrowRight className="inline-block" />
          {window.location.pathname.split("/")[1]}{" "}
          <span className={`${three}`}>
            <MdKeyboardArrowRight className="inline-block" />{" "}
            {window.location.pathname.split("/")[2]}
          </span>
        </p>
      </div> */}
      <p className="font-normal text-xs text-[var(--color---7)]">Home  <span className="text-[var(--color---3)]">›</span>  Laptops  <span className="text-[var(--color---3)]">›</span>  MSI WS Series</p>
    </>
  );
};

export default Breadcumb;
