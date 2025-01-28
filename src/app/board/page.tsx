import Header from "@/components/Header";
import Board from "@/components/board/Board";
import hsa1 from "@/public/assets/hsa1.svg";
import example from "@/public/assets/toasty.webp";

const Page = () => {
  return (
    <>
      <Header />
      <Board
        position="President"
        name="Toasty McStuffins"
        image={example.src}
        badge={hsa1.src}
      />
    </>
  );
};

export default Page;
