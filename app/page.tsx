"use client";

import DashboardCard from "./components/dashboard/DashboardCard";
import DailySchedule from "./components/dashboard/DailySchedule";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-8 py-6">
      {/* 헤더 영역 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Welcome back
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          오늘의 스케줄을 확인해보세요.
        </p>
      </div>

      {/* 오늘 일정 + 카드들 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 오늘 일정 카드 */}
        <DailySchedule />

        {/* Tasks 카드 */}
        <DashboardCard
          title="오늘 할 일"
          description="투두리스트를 확인하세요."
          href="/tasks"
        />

        {/* Calendar 카드 */}
        <DashboardCard
          title="캘린더"
          description="이번 주 일정을 확인하세요."
          href="/calendar"
        />

        {/* 보드 (칸반) 카드 */}
        <DashboardCard
          title="Boards"
          description="작업 진행도를 관리해보세요."
          href="/boards"
        />

        {/* 메모 카드 */}
        <DashboardCard
          title="Notes"
          description="간단한 메모를 추가하세요."
          href="/notes"
        />
      </div>
    </div>
  );
}
