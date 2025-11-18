// app/page.tsx

import AddTodo from "./components/AddTodo";
import FilterBar from "./components/FilterBar";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center py-14">
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl border-2 border-indigo-200">
        <h1 className="text-3xl text-indigo-700 font-bold text-center mb-10">
          To Do List
        </h1>

        <AddTodo />
        <FilterBar />
        <TodoList />
      </div>
    </div>
  );
}
