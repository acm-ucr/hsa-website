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

const EventCard: React.FC<EventCardProps> = ({ data }) => {
  return (
    <div className="mx-auto bg-white text-hsa-gray-300 m-6 p-6 w-2/3 flex flex-row gap-6 rounded-3xl shadow-md shadow-gray-500">
      <div className="flex flex-col text-center font-songMyung justify-center align-middle p-4">
        <Image src={hsa7} width={300} alt="Decoration"/>
        <div className="text-5xl/10 mt-4 w-full px-4">
          {data.date}
        </div>
        <div className="text-4xl mb-4">
          {data.time}
        </div>
        <Image className="rotate-180" src={hsa7} width={300} alt="Decoration"/>
      </div>
      <div className="bg-hsa-pink-400 w-6 rounded-xl"/>
      <div className="flex flex-col gap-2 my-auto p-4">
        <div className="text-5xl font-songMyung">
          {data.name}
        </div>
        <div className="text-xl font-semibold">
          Location: {data.location}
        </div>
        <div className="text-xl p-2 pl-0">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
