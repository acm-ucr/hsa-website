import hsa7 from "@/public/assets/hsa7.svg";
import Image from "next/image";
import { EventProps } from "../ui/calendar";

const EventCard = ({ title, location, start, description }: EventProps) => {
  const date = new Date(start as string).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const time = new Date(start as string).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="m-4 mx-auto flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white p-6 text-hsa-gray-300 shadow-md shadow-gray-500 md:flex-row">
      <div className="flex flex-col items-center justify-center p-4 text-center font-songMyung">
        <Image
          src={hsa7}
          width={200}
          height={100}
          alt="Decoration"
          className="w-2/3 md:w-[300px]"
        />
        <div className="mt-4 w-full px-4 text-3xl md:text-5xl">{date}</div>
        <div className="mb-4 text-2xl md:text-4xl">{time}</div>
        <Image
          className="w-2/3 rotate-180 md:w-[300px]"
          src={hsa7}
          width={200}
          height={100}
          alt="Decoration"
        />
      </div>
      <div className="hidden w-6 rounded-xl bg-hsa-pink-400 md:block" />
      <div className="my-auto flex flex-col gap-2 p-4 text-center md:text-left">
        <div className="font-songMyung text-3xl md:text-5xl">{name}</div>
        <div className="text-lg font-semibold md:text-xl">
          Location: {location}
        </div>
        <div className="p-2 pl-0 text-lg md:text-xl">{description}</div>
      </div>
    </div>
  );
};

export default EventCard;
