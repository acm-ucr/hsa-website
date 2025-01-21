const Navigation = () => {
  return (
    <nav className="bg-hsa-pink-200 font-serif">
      <div className="mx-auto flex py-8 text-white">
        <div className="flex items-center">
          <img src="/hsaImage.webp" className="ml-12 mr-8 h-20 w-20" />
          <div className="ml-8 text-5xl"> HSA</div>
        </div>
        <div className="ml-60 flex items-center space-x-36 text-3xl">
          <a href="\home" className="hover:text-hsa-pink-500">
            {" "}
            Home{" "}
          </a>
          <a href="\board" className="hover:text-hsa-pink-500">
            {" "}
            Board{" "}
          </a>
          <a href="\events" className="hover:text-hsa-pink-500">
            {" "}
            Events{" "}
          </a>
          <a href="\calendar" className="hover:text-hsa-pink-500">
            {" "}
            Calendar{" "}
          </a>
          <a href="\gallery" className="hover:text-hsa-pink-500">
            {" "}
            Gallery{" "}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
