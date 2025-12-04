// 경로: /src/store/slice/chatSlice.ts
// 전체 메시지 초기화(clearChat) + 메시지 업데이트(add/update) + 캐릭터 모드 포함

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatState {
  messages: ChatMessage[];
  summary: string;
  characterMode: string; // 추가됨
}

const initialState: ChatState = {
  messages: [],
  summary: "",
  characterMode: "assistant", // 기본모드
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload);
    },

    updateLastAssistantMessage(state, action: PayloadAction<string>) {
      const last = state.messages.length - 1;
      if (last >= 0 && state.messages[last].role === "assistant") {
        state.messages[last].content = action.payload;
      }
    },

    setSummary(state, action: PayloadAction<string>) {
      state.summary = action.payload;
    },

    clearChat(state) {
      state.messages = [];
      state.summary = "";
    },

    setCharacterMode(state, action: PayloadAction<string>) {
      state.characterMode = action.payload;
    },
  },
});

export const {
  addMessage,
  updateLastAssistantMessage,
  setSummary,
  clearChat,
  setCharacterMode,
} = chatSlice.actions;

export default chatSlice.reducer;
