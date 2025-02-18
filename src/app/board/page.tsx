import Header from "@/components/Header";
import Boards from "@/components/board/Boards";

const Page = () => {
  return (
    <div>
      <div className="font-songMyung">
        <Header title=" Meet the Board" />
      </div>

      <Boards />
    </div>
  );
};

export default Page;
