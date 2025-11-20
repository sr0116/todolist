"use client";

import { BoardCard, updateStatus, deleteCard } from "@/app/store/boardsSlice";
import { useDispatch } from "react-redux";

interface Props {
  card: BoardCard;
}

export default function BoardItem({ card }: Props) {
  const dispatch = useDispatch();

  const nextStatus =
    card.status === "todo"
      ? "doing"
      : card.status === "doing"
        ? "done"
        : "todo";

  return (
    <div className="
      p-4 rounded-lg bg-white dark:bg-gray-700
      border dark:border-gray-600 shadow-sm
      flex flex-col gap-2
    ">
      <h3 className="text-lg font-semibold">{card.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {card.description}
      </p>

      <div className="flex justify-between mt-2">
        <button
          onClick={() => dispatch(updateStatus({ id: card.id, status: nextStatus }))}
          className="text-sm px-2 py-1 rounded bg-gray-200 dark:bg-gray-600"
        >
          {card.status} → {nextStatus}
        </button>

        <button
          onClick={() => dispatch(deleteCard(card.id))}
          className="text-red-500 text-sm"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
