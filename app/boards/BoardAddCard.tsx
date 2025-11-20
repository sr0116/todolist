"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "@/app/store/boardsSlice";

export default function BoardAddCard() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    dispatch(addCard({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 flex flex-col gap-3">
      <input
        className="p-3 rounded bg-gray-100 dark:bg-gray-700"
        placeholder="제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="p-3 rounded bg-gray-100 dark:bg-gray-700"
        placeholder="설명 입력"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-700"
      >
        카드 추가
      </button>
    </div>
  );
}
