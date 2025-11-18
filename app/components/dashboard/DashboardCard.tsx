"use client";

import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
}

export default function DashboardCard({ title, description, href }: Props) {
  return (
    <Link
      href={href}
      className="
        block
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        p-5 rounded-xl
        shadow-sm hover:shadow-md
        transition
      "
    >
      <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </Link>
  );
}
