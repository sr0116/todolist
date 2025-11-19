"use client";

import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setDate } from "@/app/store/calendarSlice";
import SelectedTasks from "@/app/calendar/SelectedTasks";

export default function CalendarPage() {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.calendar.selectedDate);

  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);

  const onSelect = (date: string) => {
    dispatch(setDate(date));
  };

  return (
    <div className="p-6 flex flex-col gap-8">
      {/* 월 이동 영역 */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMonth(prev => prev - 1)}
          className="
            px-4 py-2 rounded-lg
            bg-gray-100 dark:bg-gray-700
            text-gray-600 dark:text-gray-300
            hover:bg-gray-200 dark:hover:bg-gray-600
            transition
          "
        >
          이전
        </button>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {year}년 {month}월
        </h2>

        <button
          onClick={() => setMonth(prev => prev + 1)}
          className="
            px-4 py-2 rounded-lg
            bg-gray-100 dark:bg-gray-700
            text-gray-600 dark:text-gray-300
            hover:bg-gray-200 dark:hover:bg-gray-600
            transition
          "
        >
          다음
        </button>
      </div>

      {/* 캘린더 */}
      <CalendarGrid
        year={year}
        month={month}
        selected={selected}
        onSelect={onSelect}
      />

      {/* 선택된 일정 */}
      <SelectedTasks />
    </div>
  );
}
