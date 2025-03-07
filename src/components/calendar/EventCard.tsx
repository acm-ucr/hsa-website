import hsa7 from "@/public/assets/hsa7.svg";
import Image from "next/image";

interface EventData {
  name: string;
  location: string;
  date: string;
  time: string;
  description: string;
}

interface EventCardProps {
  data: EventData;
}

const EventCard = ({
  data: { name, location, date, time, description },
}: EventCardProps) => {
  return (
    <div className="m-6 mx-auto flex w-2/3 flex-row gap-6 rounded-3xl bg-white p-6 text-hsa-gray-300 shadow-md shadow-gray-500">
      <div className="flex flex-col justify-center p-4 text-center align-middle font-songMyung">
        <Image src={hsa7} width={300} alt="Decoration" />
        <div className="mt-4 w-full px-4 text-5xl/10">{date}</div>
        <div className="mb-4 text-4xl">{time}</div>
        <Image className="rotate-180" src={hsa7} width={300} alt="Decoration" />
      </div>
      <div className="w-6 rounded-xl bg-hsa-pink-400" />
      <div className="my-auto flex flex-col gap-2 p-4">
        <div className="font-songMyung text-5xl">{name}</div>
        <div className="text-xl font-semibold">Location: {location}</div>
        <div className="p-2 pl-0 text-xl">{description}</div>
      </div>
    </div>
  );
};

export default EventCard;
