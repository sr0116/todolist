"use client";

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import taskReducer from "./taskSlice";
import calendarReducer from "./calendarSlice";

// Redux store 생성
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    tasks: taskReducer,
    calendar: calendarReducer,
  },
});

// 최상위 RootState 타입
export type RootState = ReturnType<typeof store.getState>;

// dispatch 타입
export type AppDispatch = typeof store.dispatch;

// Redux 상태 변경될 때마다 Slice별로 localStorage에 저장
store.subscribe(() => {
  const state = store.getState();

  // tasks 저장
  localStorage.setItem("planner_tasks", JSON.stringify(state.tasks.list));

  // calendar 저장
  localStorage.setItem("planner_calendar", JSON.stringify(state.calendar.selectedDate));

  // UI theme 저장
  localStorage.setItem("planner_ui", JSON.stringify(state.ui.theme));
});
