"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import BoardColumn from "./BoardColumn";
import BoardAddCard from "./BoardAddCard";

export default function BoardsPage() {
  const cards = useSelector((state: RootState) => state.boards.list);

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Boards</h1>

      {/* 카드 추가 */}
      <BoardAddCard />

      {/* 칼럼 3개 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BoardColumn title="To Do" status="todo" cards={cards} />
        <BoardColumn title="Doing" status="doing" cards={cards} />
        <BoardColumn title="Done" status="done" cards={cards} />
      </div>
    </div>
  );
}
