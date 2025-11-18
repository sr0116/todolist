"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Task 모델 정의
// 모든 작업(Task, Todo, 일정 카드 등)을 이 타입으로 통일하여 확장성을 확보
export interface Task {
  id: string;
  title: string;
  date: string; // yyyy-mm-dd 형식
  status: "todo" | "doing" | "done";
  memo?: string;
  color?: string; // 카드 색상 옵션
}

interface TaskState {
  list: Task[];
}

const initialState: TaskState = {
  list: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // 새로운 작업 추가
    addTask: (state, action: PayloadAction<Task>) => {
      state.list.push(action.payload);
    },

    // 작업 삭제
    deleteTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },

    // 상태(칸반 컬럼 이동: todo, doing, done)
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>
    ) => {
      const target = state.list.find(t => t.id === action.payload.id);
      if (target) {
        target.status = action.payload.status;
      }
    },

    // 작업 내용 수정(메모 또는 제목을 변경할 때 사용)
    updateTask: (
      state,
      action: PayloadAction<{ id: string; title?: string; memo?: string }>
    ) => {
      const target = state.list.find(t => t.id === action.payload.id);
      if (target) {
        if (action.payload.title !== undefined) target.title = action.payload.title;
        if (action.payload.memo !== undefined) target.memo = action.payload.memo;
      }
    },
  },
});

export const { addTask, deleteTask, updateStatus, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;
