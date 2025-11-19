"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { deleteTask, updateStatus } from "@/app/store/taskSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.list);

  const toggleStatus = (id: string, currentStatus: string) => {
    const next =
      currentStatus === "todo"
        ? "doing"
        : currentStatus === "doing"
          ? "done"
          : "todo";

    dispatch(updateStatus({ id, status: next as any }));
  };

  return (
    <div className="flex flex-col gap-4">
      {tasks.length === 0 && (
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          등록된 할 일이 없습니다.
        </div>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="
            flex justify-between items-center
            p-4 rounded-xl
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            shadow-sm
          "
        >
          {/* 할 일 제목 */}
          <div className="flex flex-col">
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              {task.title}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {task.date}
            </span>
          </div>

          {/* 좌측: 상태 버튼 */}
          <button
            onClick={() => toggleStatus(task.id, task.status)}
            className="
              px-3 py-1 rounded-lg text-sm
              bg-gray-100 dark:bg-gray-700
              text-gray-800 dark:text-gray-200
              hover:bg-gray-200 dark:hover:bg-gray-600
              transition
            "
          >
            {task.status}
          </button>

          {/* 우측: 삭제 버튼 */}
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="
              text-sm text-red-500
              hover:text-red-700
              dark:text-red-400
              dark:hover:text-red-300
            "
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
