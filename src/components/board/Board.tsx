import Image from "next/image";

const Page = (props: {
  position: string;
  name: string;
  image: string;
  badge: string;
}) => {
  return (
    <div className="flex w-1/3 flex-row items-center p-2">
      <div className="w-full flex-col place-items-center">
        <div className="relative h-2/5 w-2/5">
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
            className="absolute bottom-3 h-1/4 w-1/4"
          />
        </div>
        <div className="p-1 font-songMyung text-xl font-bold text-hsa-blue-100">
          {props.name}
        </div>
        <div className="font-openSans text-hsa-gray-300">
          {props.position}
        </div>
      </div>
    </div>
  );
};

export default Page;
