import { board } from "../../data/Board.js";
import Board from "./Board";

const Boards = () => {
  return (
    <div className="flex flex-col items-center bg-hsa-tan-100 p-5 font-songMyung">
      <div className="flex w-full justify-center gap-20">
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

      <div className="mt-14 flex w-full justify-center gap-28">
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
    </div>
  );
};

export default Boards;
