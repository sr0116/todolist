"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 h-screen border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-6 flex flex-col gap-6">
      <h1 className="text-xl font-semibold">My Planner</h1>

      <nav className="flex flex-col gap-2 text-gray-700 dark:text-gray-200">
        <Link href="/" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          Dashboard
        </Link>
        <Link href="/tasks" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          Tasks
        </Link>
        <Link href="/calendar" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          Calendar
        </Link>
        <Link href="/boards" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md">
          Boards
        </Link>
        <Link href="/notes" className="hover:bg-gray-100 dark:hover:bg-red-900 px-3 py-2 rounded-md">
          Notes
        </Link>
      </nav>
    </aside>
  );
}
