"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { addNote, deleteNote } from "@/app/store/notesSlice";
import Link from "next/link";

export default function NotesPage() {
  const notes = useSelector((state: RootState) => state.notes.list);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-6 px-6 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">노트</h1>

        <button
          onClick={() => dispatch(addNote())}
          className="px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
        >
          새 노트 추가
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {notes.length === 0 && (
          <p className="text-gray-500">작성된 노트가 없습니다.</p>
        )}

        {notes.map((note) => (
          <Link
            key={note.id}
            href={`/notes/${note.id}`}
            className="p-4 rounded-xl bg-white dark:bg-gray-800 border dark:border-gray-700
                       hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <div className="font-semibold text-lg mb-1">{note.title}</div>
            <div className="text-sm text-gray-500">{note.updatedAt.slice(0, 16)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
