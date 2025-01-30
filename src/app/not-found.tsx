import Image from "next/image";
import gallery1 from "@/public/assets/gallery1/Group 22.png";
import gallery2 from "@/public/assets/gallery2/Group 23.png";

const NotFound = () => {
  return (
    <div className="grid h-full w-full flex-auto columns-3 grid-flow-col">
      <div className="pt-8">
        <Image src={gallery1} width={300} height={300} alt="Gallery 1" />
      </div>

      <div className="m-8 w-96 justify-center pt-20 text-center">
        <div className="flex-auto font-songMyung text-9xl font-semibold text-hsa-blue-100">
          404
        </div>

        <div className="font-lightweight pt-3 font-sans text-xl text-hsa-gray-300">
          page not found!
        </div>
        <div className="flex-auto pt-4">
          <button className="rounded-full bg-hsa-green-100 px-12 py-3 font-sans font-bold text-white hover:bg-hsa-green-100">
            home
          </button>
        </div>
      </div>

      <div className="pt-40">
        <Image src={gallery2} width={300} height={300} alt="Gallery 2" />
      </div>
    </div>
  );
};

export default NotFound;
