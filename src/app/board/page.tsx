import Header from "@/components/Header";
import Board from "@/components/board/Board";
import hsa1 from "@/public/assets/hsa1.svg";
import hsa2 from "@/public/assets/hsa2.svg";
import boardMember1 from "@/public/assets/boardMember1.webp";
import boardMember2 from "@/public/assets/boardMember2.webp";
import boardMember3 from "@/public/assets/boardMember3.webp";
import boardMember4 from "@/public/assets/boardMember4.webp";
import boardMember5 from "@/public/assets/boardMember5.webp";

const Page = () => {
  return (
    <div>
      <div className="font-songMyung">
        <Header title=" Meet the Board" />
      </div>

      <div className="flex w-full flex-col items-center bg-hsa-tan-100 p-5">
        <div className="flex w-full flex-row place-items-center justify-center">
          <Board
            position="President"
            name="Lincoln Yang"
            image={boardMember1.src}
            badge={hsa1.src}
          />
          <Board
            position="Vice President"
            name="Kayleigh Young"
            image={boardMember2.src}
            badge={hsa1.src}
          />
          <Board
            position="Secretary"
            name="Anjaly Thao"
            image={boardMember3.src}
            badge={hsa1.src}
          />
        </div>

        <div className="flex w-full flex-row place-items-center justify-center">
          <Board
            position="Treasurer"
            name="Jacob Vang"
            image={boardMember4.src}
            badge={hsa2.src}
          />
          <Board
            position="Public Relations"
            name="Sara Cha"
            image={boardMember5.src}
            badge={hsa2.src}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
