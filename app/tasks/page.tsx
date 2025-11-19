"use client";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-8 px-6 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          오늘의 할 일
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          새로운 작업을 추가하거나 상태를 업데이트해보세요.
        </p>
      </div>

      <TaskForm />
      <TaskList />
    </div>
  );
}
