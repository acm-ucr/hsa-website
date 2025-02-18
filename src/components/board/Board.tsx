import Image from "next/image";

const Page = (props: {
  position: string;
  name: string;
  image: string;
  badge: string;
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative flex h-36 w-36 md:h-60 md:w-60 lg:h-72 lg:w-72">
        <Image
          src={props.image}
          alt="boardmember"
          width={144} // Matches h-36 (36 * 4 = 144px)
          height={144}
          className="h-full w-full rounded-full object-cover"
        />
        <Image
          src={props.badge}
          alt="badge"
          width={52} // Slightly smaller badge for balance
          height={52}
          className="absolute bottom-3 w-1/4"
        />
      </div>
      <div className="mt-2 text-center">
        <div className="whitespace-nowrap font-songMyung text-2xl text-hsa-blue-100 md:text-4xl lg:text-3xl">
          {props.name}
        </div>
        <div className="font-openSans text-base text-hsa-gray-300 md:text-xl lg:text-xl">
          {props.position}
        </div>
      </div>
    </div>
  );
};

export default Page;
