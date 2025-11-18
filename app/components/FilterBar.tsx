"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setFilter } from "../store/todoSlice";

const FilterBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((s: RootState) => s.todo.filter);

  const tab = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-medium border-2 transition
     ${
      active
        ? "bg-indigo-300 border-indigo-500 text-indigo-900"
        : "bg-white border-indigo-300 text-indigo-500 hover:bg-indigo-100"
    }`;

  return (
    <div className="flex gap-3 mb-6">
      <button className={tab(filter === "all")} onClick={() => dispatch(setFilter("all"))}>
        전체
      </button>

      <button className={tab(filter === "done")} onClick={() => dispatch(setFilter("done"))}>
        완료
      </button>

      <button
        className={tab(filter === "notDone")}
        onClick={() => dispatch(setFilter("notDone"))}
      >
        미완료
      </button>
    </div>
  );
};

export default FilterBar;
