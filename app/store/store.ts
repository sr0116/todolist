"use client";

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Redux store 생성
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// 상태 타입 정의
export type RootState = ReturnType<typeof store.getState>;

// dispatch 타입 정의
export type AppDispatch = typeof store.dispatch;

// Redux 상태가 변경될 때마다 localStorage에 저장
store.subscribe(() => {
  const state = store.getState().todo.todos;
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(state));
  }
});
