import { board } from "@/data/Board.ts";
import Board from "@/components/board/Board";

const Boards = () => {
  return (
    <div className="flex flex-col items-center bg-hsa-tan-100 p-5 font-songMyung">
      <div className="mt-6 hidden w-full justify-center gap-20 md:flex">
        {board.slice(0, 3).map(({ position, name, image, badge }, index) => (
          <Board
            key={index}
            position={position}
            name={name}
            image={image}
            badge={badge}
          />
        ))}
      </div>

      <div className="mt-14 hidden w-full justify-center gap-28 md:flex">
        {board.slice(3, 5).map(({ position, name, image, badge }, index) => (
          <Board
            key={index + 3}
            position={position}
            name={name}
            image={image}
            badge={badge}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 md:hidden">
        {board.slice(0, 4).map(({ position, name, image, badge }, index) => (
          <Board
            key={index}
            position={position}
            name={name}
            image={image}
            badge={badge}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center md:hidden">
        <Board
          key={4}
          position={board[4].position}
          name={board[4].name}
          image={board[4].image}
          badge={board[4].badge}
        />
      </div>
    </div>
  );
};

export default Boards;
