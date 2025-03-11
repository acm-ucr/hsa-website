import Image from "next/image";
import border from "@/public/assets/border.svg";

const Border = () => {
  return (
    <div className="mb-5 w-full overflow-hidden">
      <div className="flex w-full justify-center gap-x-2">
        {[...Array(2)].map((_, index) => (
          <Image
            key={index}
            src={border}
            alt="border"
            className="w-[70%] min-w-[60]"
          />
        ))}
      </div>
    </div>
  );
};

export default Border;
