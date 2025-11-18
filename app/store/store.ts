"use client";

import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import taskReducer from "./taskSlice";
import calendarReducer from "./calendarSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    tasks: taskReducer,
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
