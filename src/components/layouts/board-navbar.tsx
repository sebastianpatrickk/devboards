import { Board } from "@prisma/client";

import { BoardTitleForm } from "../board/board-title-form";
import { BoardOptions } from "../board/board-options";

interface BoardNavbarProps {
  data: Board;
}

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="fixed top-[65px] z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-12 items-center justify-between px-8">
        <BoardTitleForm data={data} />
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
