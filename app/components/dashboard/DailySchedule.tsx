"use client";

export default function DailySchedule() {
  return (
    <div
      className="
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        p-6 rounded-xl shadow-sm
      "
    >
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
        오늘 일정
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        아직 등록된 일정이 없습니다.
      </p>
    </div>
  );
}
