import Image from "next/image";

const Page = (props: {
  position: string;
  name: string;
  image: string;
  badge: string;
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-1/8 relative flex">
        <Image
          src={props.image}
          alt="boardmember"
          width={0}
          height={0}
          className="w-full"
        />
        <Image
          src={props.badge}
          alt="badge"
          width={0}
          height={0}
          className="absolute bottom-3 w-1/4"
        />
      </div>
      <div className="mt-2 text-center">
        <div className="font-songMyung text-3xl text-hsa-blue-100">
          {props.name}
        </div>
        <div className="font-openSans text-lg text-hsa-gray-300">
          {props.position}
        </div>
      </div>
    </div>
  );
};

export default Page;
