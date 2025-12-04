// 경로: /src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slice/chatSlice";

const loadState = () => {
  try {
    const data = localStorage.getItem("chat_state");
    if (!data) return undefined;
    return JSON.parse(data);
  } catch {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    localStorage.setItem("chat_state", JSON.stringify(state.chat));
  } catch {}
};

export const store = configureStore({
  reducer: { chat: chatReducer },
  preloadedState: { chat: loadState() },
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
