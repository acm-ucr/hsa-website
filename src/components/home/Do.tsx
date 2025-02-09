{
  /*import Image from "next/image";
import border from "@/public/assets/border.svg";
import hsaImage from "@/public/hsaImage.webp";*/
}

const Do = () => {
  return (
    <div className="bg-hsatan-100 w-full flex-row rounded-lg">
      <div className="ml-12 h-3/4 w-3/4 space-y-5 mt-14 mb-2">
        <div className=" font-songMyung text-6xl text-hsa-blue-100">
          What We Do
        </div>
        <div className="ml-1 mr-20 pb-8 font-openSans text-2xl text-hsa-gray-300 font-semibold">
          We are the Hmong Student Association (HSA) at the University of
          California, Riverside (UCR), and we need your support! As an
          organization committed to empowering and uniting Hmong students on
          campus, we strive to create an inclusive, educational, and culturally
          enriching space for students to learn, grow, and connect.
        </div>
      </div>
      {/*<div className="w-full space-y-5">
        <Image
          src={border}
          alt="add image description here"
          className="w-full object-contain"
        />

        <div className="w-full bg-hsa-gray-200">
          <Image src={hsaImage} alt="HSA" className="h-16 w-16 p-1" />
        </div>
      </div>*/}
    </div>
  );
};

export default Do;
