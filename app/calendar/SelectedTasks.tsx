"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export default function SelectedTasks() {
  const selected = useSelector((state: RootState) => state.calendar.selectedDate);
  const tasks = useSelector((state: RootState) => state.tasks.list);

  const filtered = tasks.filter((t) => t.date === selected);

  return (
    <div
      className="
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        p-5 rounded-xl shadow-sm
      "
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
        선택된 날짜: {selected || "날짜를 선택하세요"}
      </h2>

      {filtered.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          일정이 없습니다.
        </p>
      )}

      <div className="flex flex-col gap-3">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="
              p-3 rounded-lg
              bg-gray-50 dark:bg-gray-700
              border border-gray-200 dark:border-gray-600
              text-gray-900 dark:text-gray-100
            "
          >
            <div className="font-medium">{task.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {task.date} / {task.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
