import Link from "next/link";
import Image from "next/image";
import hsaImage from "@/public/hsaImage.webp";

const Navigation = () => {
  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="mx-auto flex py-8 text-white">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={hsaImage}
              alt="logo"
              className="ml-12 mr-10 object-scale-down"
            />
          </Link>
          <div className="ml-[30%] text-5xl"> HSA</div>
        </div>
        <ul className="ml-[40%] flex w-2/3 items-center space-x-10 text-2xl">
          <li className="hover:text-hsa-pink-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-hsa-pink-500 pl-[8%]">
            <Link href="/board">Board</Link>
          </li>
          <li className="hover:text-hsa-pink-500 pl-[8%]">
            <Link href="/events">Events</Link>
          </li>
          <li className="hover:text-hsa-pink-500 pl-[8%]">
            <Link href="/calendar">Calendar</Link>
          </li>
          <li className="hover:text-hsa-pink-500 pl-[8%]">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="h-4 bg-hsa-blue-100"></div>
    </nav>
  );
};

export default Navigation;
