"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";

// 오늘 날짜를 yyyy-mm-dd 형태로 반환하는 함수
function getToday() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function DailySchedule() {
  // Redux에서 task 리스트 가져오기
  const tasks = useSelector((state: RootState) => state.tasks.list);

  // 오늘 날짜 계산
  const today = getToday();

  // 오늘 날짜와 일치하는 작업만 필터링
  const todayTasks = tasks.filter(t => t.date === today);

  return (
    <div
      className="
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-xl p-6 shadow-sm
      flex flex-col gap-4
    "
    >
      {/* 제목 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          오늘 일정
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {today}
        </p>
      </div>

      {/* 오늘 일정 없는 경우 */}
      {todayTasks.length === 0 && (
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          오늘 등록된 일정이 없습니다.
        </div>
      )}

      {/* 일정 리스트 */}
      <div className="flex flex-col gap-3">
        {todayTasks.map(task => (
          <div
            key={task.id}
            className="
            p-3 rounded-lg
            bg-gray-50 dark:bg-gray-700
            border border-gray-200 dark:border-gray-600
            text-sm flex justify-between items-center
            "
          >
            {/* 작업 제목 */}
            <span className="text-gray-800 dark:text-gray-100">
              {task.title}
            </span>

            {/* 상태 표시 */}
            <span
              className={`
              px-3 py-1 rounded-full text-xs
              ${
                task.status === "done"
                  ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                  : task.status === "doing"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200"
              }
              `}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>

      {/* 전체 페이지로 이동 */}
      <Link
        href="/tasks"
        className="
        text-sm text-gray-600 dark:text-gray-300
        hover:text-gray-900 dark:hover:text-white
        transition duration-150
      "
      >
        전체 할 일 보기 →
      </Link>
    </div>
  );
}
