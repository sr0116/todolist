"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// UI와 관련된 상태만 관리하는 Slice
// 여기서는 현재 테마(light/dark)만 관리
interface UIState {
  theme: "light" | "dark";
}

const initialState: UIState = {
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // 로컬스토리지에 저장된 UI 테마 로드
    loadTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },

    // theme를 직접 설정
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },

    // theme 토글
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { loadTheme, setTheme, toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
