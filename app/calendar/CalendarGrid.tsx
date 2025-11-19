"use client";

import DayCell from "@/app/calendar/DayCell";

interface Props {
  year: number;
  month: number;
  selected: string;
  onSelect: (dateString: string) => void;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getStartDay(year: number, month: number) {
  return new Date(year, month - 1, 1).getDay();
}

export default function CalendarGrid({ year, month, selected, onSelect }: Props) {
  const days = getDaysInMonth(year, month);
  const start = getStartDay(year, month);

  const cells: (string | null)[] = [];

  // 앞의 빈칸
  for (let i = 0; i < start; i++) {
    cells.push(null);
  }

  // 날짜 넣기
  for (let d = 1; d <= days; d++) {
    const dateStr = `${year}-${String(month).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    cells.push(dateStr);
  }

  return (
    <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-xl border-gray-300 border dark:border-gray-700">
      {/* 요일 */}
      <div className="grid grid-cols-7 mb-4 text-center font-medium text-gray-600 dark:text-gray-300">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>

      {/* 날짜 */}
      <div className="grid grid-cols-7 gap-3">
        {cells.map((date, idx) =>
          date ? (
            <DayCell
              key={idx}
              value={date}
              selected={selected}
              onSelect={onSelect}
            />
          ) : (
            <div key={idx} className="h-16" />
          )
        )}
      </div>
    </div>
  );
}
