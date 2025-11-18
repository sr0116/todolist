"use client";

import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/todoSlice";
import { Todo } from "../store/todoSlice";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();

  return (
    <div
      className="
        flex items-center justify-between
        bg-white
        p-4
        rounded-xl
        border-2 border-indigo-200
        shadow-sm
        transition
        hover:border-indigo-400
      "
    >
      {/* 왼쪽 체크박스 + 텍스트 */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="
            h-5 w-5
            accent-indigo-600
          "
        />

        <span
          className={`
            text-base
            ${todo.isDone ? "line-through text-gray-400" : "text-gray-700"}
          `}
        >
          {todo.text}
        </span>
      </div>

      {/* Delete 버튼 */}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="
          px-4 py-1
          rounded-lg
          text-sm
          font-medium
          bg-indigo-200
          text-indigo-800
          border-2 border-indigo-400
          hover:bg-indigo-300
          transition
        "
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
