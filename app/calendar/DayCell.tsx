"use client";

interface Props {
  value: string; // ← 여기만 고치면 됨
  selected: string;
  onSelect: (dateString: string) => void;
}

export default function DayCell({ value, selected, onSelect }: Props) {

  const isSelected = selected === value;
  const isToday = value === getKSTDate();

  const d = value.split("-")[2]; // 19, 20 같은 날짜만 추출

  function getKSTDate() {
    const d = new Date();
    const offset = d.getTime() + 9 * 60 * 60 * 1000;
    const kst = new Date(offset);

    const y = kst.getFullYear();
    const m = String(kst.getMonth() + 1).padStart(2, "0");
    const day = String(kst.getDate()).padStart(2, "0");

    return `${y}-${m}-${day}`;
  }

  return (
    <div
      onClick={() => onSelect(value)}
      className={`
        h-16 flex items-center justify-center rounded-lg cursor-pointer 
        border text-sm transition
        ${
        isSelected
          ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 border-gray-900 dark:border-gray-100"
          : isToday
            ? "bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
      }
      `}
    >
      {d}
    </div>
  );
}
