"use client";

import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { v4 as uuidv4 } from "uuid";

function getToday() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function TaskForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getToday());

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(
      addTask({
        id: uuidv4(),
        title,
        date,
        status: "todo",
      })
    );

    setTitle("");
    setDate(getToday());
  };

  return (
    <form
      onSubmit={onSubmit}
      className="
        flex flex-col gap-4
        bg-white dark:bg-gray-800
        p-5 rounded-xl shadow-sm
        border border-gray-200 dark:border-gray-700
      "
    >
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          할 일 제목
        </label>
        <input
          type="text"
          placeholder="예: 운동하기, 공부하기..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            rounded-lg px-3 py-2
            bg-gray-50 dark:bg-gray-700
            border border-gray-300 dark:border-gray-600
            text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2
            focus:ring-gray-400 dark:focus:ring-gray-500
          "
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          날짜
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="
            rounded-lg px-3 py-2
            bg-gray-50 dark:bg-gray-700
            border border-gray-300 dark:border-gray-600
            text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2
            focus:ring-gray-400 dark:focus:ring-gray-500
          "
        />
      </div>

      <button
        type="submit"
        className="
          px-4 py-2 rounded-lg
          bg-gray-900 text-white
          dark:bg-gray-100 dark:text-gray-900
          hover:bg-gray-800 dark:hover:bg-gray-200
          transition
        "
      >
        추가하기
      </button>
    </form>
  );
}
