"use client"

// todo 타입 정의
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

// slice 상태 타입 정의

interface TodoState {
  todos: Todo[];
  filter: "all" | "done" | "notDone";
}

// 초기 상태 정의
const initialState: TodoState = {
  todos: [],
  filter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // 로컬 스토리지 데이터 로딩
    loadTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },

    // todo  추가
    addTodo: (state, action: PayloadAction<string>) => {
      const nextId =
        state.todos.length > 0
          ? Math.max(...state.todos.map(t => t.id)) + 1
          : 1;

      state.todos.push({
        id: nextId,
        text: action.payload,
        isDone: false,
      });
    },
    // todo 삭제

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    // 완료 여부 토글
    toggleTodo: (state, action: PayloadAction<number>) => {
      const target = state.todos.find( todo => todo.id === action.payload);
      if (target) {
        target.isDone = !target.isDone;
      }
    },
    // 필터 변경
    setFilter: (state, action: PayloadAction<TodoState["filter"]>) => {
      state.filter = action.payload;
    }
  },
});

// 액션  export
export const { loadTodos, addTodo, deleteTodo, toggleTodo, setFilter } =
  todoSlice.actions;

// 리듀서

export default todoSlice.reducer;