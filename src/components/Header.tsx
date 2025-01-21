import Image from "next/image";

type props = {
  title: string;
};

const Header = ({ title }: props) => {
  return (
    <div className="flex flex-row border-t-4 border-indigo-600 bg-hsa-tan-100">
      <div className="self-end">
        <Image src="/hsa5.svg" alt="HSA5" />
      </div>
      <div className="text-3xl">{title}</div>
      <div className="self-start">
        <Image src="/hsa5.svg" alt="HSA5" />
      </div>
    </div>
  );
};

export default Header;
