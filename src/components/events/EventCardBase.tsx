interface EventCardBaseProps {
  title: string;
  location: string;
  description: string;
}

const EventCardBase: React.FC<EventCardBaseProps> = ({
  title,
  location,
  description,
}) => {
  return (
    <div className="grid max-w-xl grid-cols-3 rounded-2xl bg-white p-8 shadow-md">
      <div className="col-span-2">
        <h1 className="mb-2 font-songMyung text-3xl font-bold text-blue-800">
          {title}
        </h1>
        <p className="mb-2 text-sm font-semibold text-gray-600">
          Location: {location}
        </p>
        <p className="mb-3 font-openSans font-medium text-gray-500">
          {description}
        </p>
      </div>
      <div className="col-span-1 mb-5 aspect-[11/10] bg-gray-300"></div>
      <div className="col-span-2 mr-5 bg-gray-300"></div>
      <div className="col-span-1 aspect-[11/10] bg-gray-300"></div>
    </div>
  );
};

export default EventCardBase;
