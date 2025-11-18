"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/uiSlice";
import type { AppDispatch, RootState } from "../../store/store";

export default function Topbar() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <header className="w-full h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between px-6">
      <h2 className="text-lg font-medium">Daily Dashboard</h2>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="text-sm px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
