interface EventCardBaseProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageURL: string;
}

const EventCardBase: React.FC<EventCardBaseProps> = ({
  title,
  shortDescription,
  longDescription,
  imageURL,
}) => {
  return (
    <div className="h-200 mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-10 shadow-lg">
      <h1 className="mb-6 mt-2 text-center font-songMyung text-6xl font-medium text-hsa-blue-100">
        {title}
      </h1>
      <div className="flex flex-wrap items-center">
        <img
          className="mb-4 max-w-lg object-cover shadow-md sm:mb-0 sm:mr-6"
          src={imageURL}
        ></img>
        <p className="flex-1 font-openSans text-xl font-medium text-gray-700">
          {shortDescription}
        </p>
      </div>
      <p className="mt-6 ml-2 mr-16 font-openSans text-xl font-medium text-gray-700">
        {longDescription}
      </p>
    </div>
  );
};

export default EventCardBase;
