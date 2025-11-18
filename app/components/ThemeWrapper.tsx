"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

export default function ThemeWrapper({
                                       children,
                                     }: {
  children: React.ReactNode;
}) {
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">

        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-8">{children}</main>
        </div>

      </div>
    </div>
  );
}
