import { board } from "../../data/Board.js";
import Board from "./Board";
import hsa1 from "@/public/assets/hsa1.svg";

const Boards = () => {
  return (
    <div className="flex flex-col items-center bg-hsa-tan-100 p-5 font-songMyung">
      {/* Large & Medium Screens */}
      <div className="hidden w-full justify-center gap-20 md:flex">
        {board.slice(0, 3).map((BOARD, index) => (
          <Board
            key={index}
            position={BOARD.position}
            name={BOARD.name}
            image={BOARD.image.src}
            badge={BOARD.badge}
          />
        ))}
      </div>

      <div className="mt-14 hidden w-full justify-center gap-28 md:flex">
        {board.slice(3, 5).map((BOARD, index) => (
          <Board
            key={index + 3}
            position={BOARD.position}
            name={BOARD.name}
            image={BOARD.image.src}
            badge={BOARD.badge}
          />
        ))}
      </div>

      {/* Small Layout */}
      <div className="grid grid-cols-2 gap-6 md:hidden">
        {board.slice(0, 4).map((BOARD, index) => (
          <Board
            key={index}
            position={BOARD.position}
            name={BOARD.name}
            image={BOARD.image.src}
            badge={BOARD.name === "Jacob Vang" ? hsa1.src : BOARD.badge} // Condition for Jacob
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center md:hidden">
        <Board
          key={4}
          position={board[4].position}
          name={board[4].name}
          image={board[4].image.src}
          badge={board[4].name === "Jacob Vang" ? hsa1.src : board[4].badge} // Condition for Jacob
        />
      </div>
    </div>
  );
};

export default Boards;
