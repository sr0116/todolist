"use client";

import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { updateNote, deleteNote } from "@/app/store/notesSlice";
import { useState, useEffect } from "react";

export default function NoteEditorPage() {
  const { id } = useParams() as { id: string };
  const dispatch = useDispatch();

  const note = useSelector((state: RootState) =>
    state.notes.list.find((n) => n.id === id)
  );

  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  if (!note) {
    return <div className="p-6">노트를 찾을 수 없습니다.</div>;
  }

  const handleSave = () => {
    dispatch(updateNote({ id, title, content }));
  };

  const handleDelete = () => {
    dispatch(deleteNote(id));
    window.location.href = "/notes";
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{title || "노트"}</h1>
        <button
          onClick={handleDelete}
          className="px-4 py-2 text-red-500 hover:text-red-700"
        >
          삭제
        </button>
      </div>

      <input
        className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleSave}
      />

      <textarea
        className="w-full h-[400px] p-4 rounded-lg bg-gray-100 dark:bg-gray-700"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onBlur={handleSave}
      />
    </div>
  );
}
