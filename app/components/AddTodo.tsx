"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { AppDispatch } from "../store/store";

const AddTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form
      onSubmit={submit}
      className="mb-6 bg-white p-6 rounded-xl border-2 border-indigo-200 shadow-sm"
    >
      <label className="text-indigo-700 font-semibold text-lg mb-3 block">
       해야 할 일 추가 !
      </label>

      <div className="flex gap-3">
        <input
          type="text"
          value={text}
          placeholder="해야할 일은 작성 해 주세요"
          onChange={(e) => setText(e.target.value)}
          className="
            flex-1
            px-4 py-3
            border-2 border-indigo-300
            rounded-lg
            text-gray-700
            focus:outline-none
            focus:border-indigo-500
          "
        />

        <button
          type="submit"
          className="
            px-5 py-3
            rounded-lg
            bg-indigo-300
            border-2 border-indigo-500
            text-indigo-900
            font-semibold
            hover:bg-indigo-400
            transition
          "
        >
          추가
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
