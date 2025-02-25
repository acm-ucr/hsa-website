import Image from "next/image";
import hsa8 from "@/public/assets/hsa8.svg";
import hsa9 from "@/public/assets/hsa9.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid flex-grow grid-cols-3">
      <div className="flex items-start justify-start">
        <Image
          src={hsa8}
          alt="Gallery 2"
          className="mt-[10%] object-scale-down"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-songMyung text-9xl font-semibold text-hsa-blue-100">
          404
        </p>
        <p className="font-lightweight pt-3 font-sans text-hsa-gray-300 md:text-base lg:text-xl">
          page not found!
        </p>
        <Link
          href="/"
          className="mt-[5%] rounded-full bg-hsa-green-100 px-12 py-3 font-sans font-bold text-white hover:bg-hsa-green-100"
        >
          home
        </Link>
      </div>

      <div className="flex items-end justify-end">
        <Image
          src={hsa9}
          alt="Gallery 2"
          className="mb-[10%] object-scale-down"
        />
      </div>
    </div>
  );
};

export default NotFound;
