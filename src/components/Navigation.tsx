const Navigation = () => {
  return (
    <nav className="bg-hsa-pink-200 font-serif">  
      <div className="flex text-white py-8 mx-auto"> 
        <div className="flex items-center">
          <img 
            src="/hsaImage.svg"
            className="ml-8 w-20 h-20 mr-8"
          /> 
          <div className="text-5xl"> HSA</div>
        </div>  
        <div className="flex items-center ml-20 text-3xl space-x-14">
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
