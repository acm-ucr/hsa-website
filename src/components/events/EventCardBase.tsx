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
    <div className="h-200 mx-8 mb-10 mt-10 max-w-4xl rounded-2xl bg-white p-10 shadow-lg md:mx-auto">
      <h1 className="mb-6 mt-2 text-center font-songMyung text-3xl font-medium text-hsa-blue-100 md:text-6xl">
        {title}
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="flex items-center md:mr-5">
          <Image src={imageURL} width={width} height={height} alt="" />
        </div>
        <p className="flex-1 pt-2 font-openSans text-base font-medium text-gray-700 md:text-xl">
          {shortDescription}
        </p>
      </div>
      <p className="mt-6 font-openSans text-base font-medium text-gray-700 md:ml-2 md:mr-16 md:text-xl">
        {longDescription}
      </p>
    </div>
  );
};

export default EventCardBase;
