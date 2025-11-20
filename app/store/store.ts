"use client";

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import taskReducer from "./taskSlice";
import calendarReducer from "./calendarSlice";
import notesReducer from "./notesSlice";
import boardsReducer from "./boardsSlice";


// Redux store 생성
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    tasks: taskReducer,
    calendar: calendarReducer,
    notes: notesReducer,
    boards: boardsReducer,
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

// notes 자동 저장
store.subscribe(() => {
  const notes = store.getState().notes.list;
  if (typeof window !== "undefined") {
    localStorage.setItem("planner_notes", JSON.stringify(notes));
  }
});
