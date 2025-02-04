import Image from "next/image";

interface EventCardBaseProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageURL: string;
  width: number;
  height: number;
}

const EventCardBase: React.FC<EventCardBaseProps> = ({
  title,
  shortDescription,
  longDescription,
  imageURL,
  width,
  height,
}) => {
  return (
    <div className="h-200 mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-10 shadow-lg">
      <h1 className="mb-5 mt-2 text-center font-songMyung text-6xl font-medium text-hsa-blue-100">
        {title}
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="mr-5">
          <Image src={imageURL} width={width} height={height} alt="" />
        </div>
        <p className="flex-1 font-openSans text-xl font-medium text-gray-700">
          {shortDescription}
        </p>
      </div>
      <p className="ml-2 mr-16 mt-6 font-openSans text-xl font-medium text-gray-700">
        {longDescription}
      </p>
    </div>
  );
};

export default EventCardBase;
