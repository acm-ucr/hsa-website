const About = () => {
  return (
    <div className="mx-auto -mt-24">
      <div className="flex justify-center">
        <img
          src="/assets/hsa6.svg"
          alt="asset image"
          className="ml-32 mr-auto h-80 w-80"
        />
      </div>

      <div className="-mt-20 flex justify-center">
        <img
          src="/hsaPeople.webp"
          alt="hsa people image"
          className="h-70 ml-20 mr-auto w-[28rem]"
        />
      </div>

      <div className="-mt-20 flex rotate-180 justify-center">
        <img
          src="/assets/hsa6.svg"
          alt="asset image"
          className="ml-auto mr-32 h-80 w-80"
        />
      </div>
      <div className="-mt-14 h-10 bg-hsa-pink-200 shadow-md"> </div>
    </div>
  );
};

export default About;
