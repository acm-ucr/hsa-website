const Navigation = () => {
  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="mx-auto flex py-8 text-white">
        <div className="flex items-center">
          <img src="/hsaImage.svg" className="ml-8 mr-8 h-20 w-20" />
          <div className="text-5xl"> HSA</div>
        </div>
        <div className="ml-20 flex items-center space-x-14 text-3xl">
          <div className="">Home</div>
          <div className="">Board</div>
          <div className="">Events</div>
          <div className="">Calendar</div>
          <div className="">Gallery</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
