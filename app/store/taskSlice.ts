"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Task 타입 정의
// 하나의 작업(Task/Card/할일)을 설명하는 데이터 모델
// 이 모델은 확장성 있게 구성되어 있음
// - id: 해당 작업의 고유값 (문자열)
// - title: 제목
// - date: 특정 날짜와 연결
// - status: 작업의 상태(todo, doing, done)
// - memo/color는 옵션 필드
export interface Task {
  id: string;
  title: string;
  date: string; // yyyy-mm-dd 형식
  status: "todo" | "doing" | "done";
  memo?: string;
  color?: string;
}

// TaskState는 전체 작업 리스트를 담는 타입
// Redux에서는 Slice당 하나의 state를 다루기 때문에 이렇게 별도 타입을 정의함
interface TaskState {
  list: Task[];
}

// 초기 상태 값
// list는 처음엔 빈 배열
const initialState: TaskState = {
  list: [],
};

// Slice 생성
// createSlice는 name / initialState / reducers 로 구성됨
// reducers 안에는 state를 변경하는 함수들을 정의함
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // 로컬스토리지에서 불러온 tasks 배열을 통째로 state에 넣는 reducer
    // InitLoader에서 최초 실행 시 사용됨
    loadTasks: (state, action: PayloadAction<Task[]>) => {
      state.list = action.payload;
    },

    // 새로운 작업 추가
    // action.payload: Task 타입 하나의 전체 객체
    addTask: (state, action: PayloadAction<Task>) => {
      state.list.push(action.payload);
    },

    // 작업 삭제
    deleteTask: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },

    // 작업 상태(todo/doing/done)를 변경
    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: Task["status"] }>
    ) => {
      const target = state.list.find(t => t.id === action.payload.id);
      if (target) {
        target.status = action.payload.status;
      }
    },

    // 작업 내용 수정(제목 또는 메모)
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

// action들을 export 해야 외부에서 dispatch로 사용 가능
export const {
  loadTasks,
  addTask,
  deleteTask,
  updateStatus,
  updateTask
} = taskSlice.actions;

// reducer를 export해야 store에서 연결 가능
export default taskSlice.reducer;
