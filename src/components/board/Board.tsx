const Page = (props: {
  position: string;
  name: string;
  image: {};
  badge: {};
}) => {
  return (
    <div>
      {" "}
      Board Members
      <div className="flex h-full w-full flex-row items-center justify-center gap-20 font-serif">
        <div className="flex-col">
          <div className="relative h-64 w-64 rounded-full bg-white object-cover object-center">
            <img
              src={props.badge}
              alt="badge"
              className="absolute bottom-0 size-16"
            />
            <img src={props.image} alt="example" className="w-full" />
          </div>
          <div className="p-2 text-center text-xl font-bold">{props.name}</div>
          <div className="text-center"> {props.position}</div>
        </div>
        <div className="flex-col">
          <div className="relative h-64 w-64 rounded-full bg-white object-cover object-center">
            <img src={props.badge} alt="badge" className="absolute size-16" />
            <img src={props.image} alt="example" className="w-full" />
          </div>
          <div className="p-2 text-center text-xl font-bold">{props.name}</div>
          <div className="text-center"> {props.position}</div>
        </div>
        <div className="flex-col">
          <div className="relative h-64 w-64 rounded-full bg-white object-cover object-center">
            <img
              src={props.badge}
              alt="badge"
              className="absolute end-0 size-16"
            />
            <img src={props.image} alt="example" className="w-full" />
          </div>
          <div className="p-2 text-center text-xl font-bold"> {props.name}</div>
          <div className="text-center"> {props.position}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
