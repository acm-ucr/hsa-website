import Link from "next/link";
import Image from "next/image";
import hsaImage from "@/public/hsaImage.webp";

const Navigation = () => {
  return (
    <nav className="bg-hsa-pink-200 font-songMyung">
      <div className="mx-auto flex py-5 text-white">
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
        <ul className="ml-60 flex items-center space-x-36 text-3xl">
          <li className="hover:text-hsa-pink-300 hover:underline hover:decoration-[10px] hover:underline-offset-[12px]">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:text-hsa-pink-300 hover:underline hover:decoration-[10px] hover:underline-offset-[12px]">
            <Link href="/board">Board</Link>
          </li>
          <li className="hover:text-hsa-pink-300 hover:underline hover:decoration-[10px] hover:underline-offset-[12px]">
            <Link href="/events">Events</Link>
          </li>
          <li className="hover:text-hsa-pink-300 hover:underline hover:decoration-[10px] hover:underline-offset-[12px]">
            <Link href="/calendar">Calendar</Link>
          </li>
          <li className="hover:text-hsa-pink-300 hover:underline hover:decoration-[10px] hover:underline-offset-[12px]">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="h-4 bg-hsa-blue-100"></div>
    </nav>
  );
};

export default Navigation;
