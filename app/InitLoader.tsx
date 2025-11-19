"use client";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Slice에서 load 액션 불러오기
import { loadTasks } from "./store/taskSlice";
import { loadCalendar } from "./store/calendarSlice";
import { loadTheme } from "./store/uiSlice";

// InitLoader는 앱 시작 시 1번 실행되어
// localStorage → Redux로 상태를 불러오는 역할
export default function InitLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // tasks 불러오기
    const tasks = localStorage.getItem("planner_tasks");
    if (tasks) dispatch(loadTasks(JSON.parse(tasks)));

    // calendar 날짜 불러오기
    const date = localStorage.getItem("planner_calendar");
    if (date) dispatch(loadCalendar(JSON.parse(date)));

    // theme 불러오기
    const theme = localStorage.getItem("planner_ui");
    if (theme) dispatch(loadTheme(JSON.parse(theme)));

  }, [dispatch]);

  return <>{children}</>;
}
