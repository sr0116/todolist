"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 달력에서 선택한 날짜를 저장
// 단순 문자열 yyyy-mm-dd 형태
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
    // 로컬스토리지에서 불러온 날짜 세팅
    loadCalendar: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },

    // 날짜 직접 변경
    setDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { loadCalendar, setDate } = calendarSlice.actions;

export default calendarSlice.reducer;
