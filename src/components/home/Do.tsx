import Image from "next/image";
import border from "@/public/assets/border.svg";
import hsaImage from "@/public/hsaImage.webp";

const Do = () => {
  return (
    <div className="w-full flex-row rounded-lg bg-hsatan-100">
      <div className="ml-5 h-3/4 w-3/4 space-y-5 p-10">
        <div className="font-songMyung w-full text-6xl font-Semibold text-hsa-blue-100">
          What We Do
        </div>
        <div className="text-2x1 font-open-sans font-semibold text-hsa-gray-300">
          <p>
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww           
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          </p>
        </div>
      </div>
      <div className="w-full space-y-5">
        <Image
          src={border}
          alt="add image description here"
          className="w-full object-contain"
        />

        <div className="w-full bg-hsa-gray-200">
          <Image src={hsaImage} alt="HSA" className="h-16 w-16 p-1"/>





        </div>
      </div>
    </div>
  );
};

export default Do;
