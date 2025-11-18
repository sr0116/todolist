"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 달력에서 선택된 날짜를 저장하는 Slice
// 각 페이지에서 공통적으로 사용될 수 있음
interface CalendarState {
  selectedDate: string;
}

const initialState: CalendarState = {
  selectedDate: "",
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    // 선택 날짜 변경
    setDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setDate } = calendarSlice.actions;

export default calendarSlice.reducer;
