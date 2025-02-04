import hsa7 from "@/public/assets/hsa7.svg";
import Image from "next/image";

const MOCKDATA = {
  name: "Event Name",
  location: "SSC MPR 2",
  date: "NOV 25",
  time: "7:00 PM",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia earum itaque quasi ea dolores voluptatum. Debitis sint voluptatibus ab consectetur quam, unde dolorum consequatur laborum numquam atque totam fuga quaerat!"
}

const EventCard = () => {
  return (
    <div className="bg-white m-6 p-6 w-3/4 flex flex-row gap-4 rounded-2xl shadow-md shadow-gray-500">
      <div className="flex flex-col text-center font-songMyung justify-center align-middle">
        <Image src={hsa7} width={300} alt="Decoration"/>
        <div className="text-4xl/8 mt-4 w-full px-4">
          {MOCKDATA.date}
        </div>
        <div className="text-2xl mb-4">
          {MOCKDATA.time}
        </div>
        <Image className="rotate-180" src={hsa7} width={300} alt="Decoration"/>
      </div>
      <div className="bg-hsa-pink-400 w-2 rounded-xl"/>
      <div className="flex flex-col my-auto">
        <div className="text-3xl font-songMyung">
          {MOCKDATA.name}
        </div>
        <div>
          Location: {MOCKDATA.location}
        </div>
        <div>
          {MOCKDATA.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
