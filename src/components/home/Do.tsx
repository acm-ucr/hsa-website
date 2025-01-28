import Image from "next/image";
import border from "@/public/assets/border.svg";

const Do = () => {
  return (
    <div className="w-full flex-row rounded-lg bg-hsa-tan-100">
      <div className="h-3/4 w-3/4 flex-row space-y-5 p-8">
        <div className="font-songMyung w-full text-4xl font-bold text-hsa-blue-100">
          What We Do
        </div>
        <div className="text-md font-open-sans h-3/4 w-full font-semibold text-hsa-gray-300">
          <p>
            Our team is made up of a group of talented individuals who are
            passionate about technology and innovation.
          </p>
        </div>
      </div>
      <div className="box-content-1 w-full space-y-5">
        <Image
          src={border}
          alt="add image description here"
          className="w-full object-contain"
        />

        <div className="h-16 w-full bg-hsa-gray-200"></div>
      </div>
    </div>
  );
};

export default Do;
