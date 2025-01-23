import hsa4 from "@/public/assets/hsa4.svg";

const Mission = () => {
  return (
    <div className="flex items-center gap-1 p-10">
      <div className="flex-col gap-1">
        <div className="w-1/2 p-5 text-left font-serif text-6xl text-blue-800">
          Our Mission
        </div>
        <div className="w-full p-5 text-left text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      {/* <div className="w-1/2 p-5 text-right text-4xl">placeholder</div> */}
      <div className="flex w-1/2 items-center justify-center">
        <img src={hsa4.src} alt="HSA" className="w-3/4" />
      </div>
    </div>
  );
};

export default Mission;
