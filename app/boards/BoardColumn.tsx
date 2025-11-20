"use client";

import BoardItem from "./BoardItem";
import { BoardCard } from "@/app/store/boardsSlice";

interface Props {
  title: string;
  status: "todo" | "doing" | "done";
  cards: BoardCard[];
}

export default function BoardColumn({ title, status, cards }: Props) {
  const filtered = cards.filter((c) => c.status === status);

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 border rounded-lg">
      <h2 className="font-semibold text-lg mb-3">{title}</h2>

      <div className="flex flex-col gap-3">
        {filtered.map((card) => (
          <BoardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
