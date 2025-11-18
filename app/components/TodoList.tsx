"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const filter = useSelector((state: RootState) => state.todo.filter);

  const filtered = todos.filter((t) => {
    if (filter === "done") return t.isDone;
    if (filter === "notDone") return !t.isDone;
    return true;
  });

  return (
    <div className="space-y-4">
      {filtered.length === 0 ? (
        <p className="text-center text-indigo-600 opacity-60 mt-4">
          할 일이 없습니다.
        </p>
      ) : (
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
