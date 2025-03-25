import Image from "next/image";
import border from "@/public/assets/border.svg";

const Border = () => {
  return (
    <div className="mb-5 flex w-full justify-center gap-x-1 md:gap-x-2 lg:gap-x-5">
      {[...Array(2)].map((_, index) => (
        <Image
          key={index}
          src={border}
          alt="border"
          className="w-[70%] min-w-[60]"
        />
      ))}
    </div>
  );
};

export default Border;
