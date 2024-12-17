import Image from "next/image";

const SupportItem = ({img,h3,p}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-[65px] w-[65px] rounded-full bg-[var(--color---3)]">
        <Image src={img} alt={img} />
      </div>
      <h3 className="font-bold text-lg mt-6 mb-3 leading-[133%] text-center text-[var(--color---7)]">
        {h3}
      </h3>
      <p className="max-w-[285px] mx-auto font-normal text-sm leading-[140%] text-center text-[var(--color---7)] opacity-70">
        {p}
      </p>
    </div>
  );
};

export default SupportItem;
