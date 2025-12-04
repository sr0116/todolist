// 경로: /src/app/chatbot/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputBar from "@/app/components/chat/InputBar";

import {
  addMessage,
  updateLastAssistantMessage,
  setSummary,
  clearChat,
  setCharacterMode,
  ChatMessage,
} from "@/store/slice/chatSlice";

import { AppDispatch, RootState } from "@/store/store";

import dynamic from "next/dynamic";

//  ChatContainer SSR 비활성화
const ChatContainer = dynamic(
  () => import("@/app/components/chat/ChatContainer"),
  { ssr: false }
);

export default function ChatbotPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { messages, summary, characterMode } = useSelector(
    (state: RootState) => state.chat
  );

  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const trySummarize = async () => {
    if (messages.length < 12) return;

    const res = await fetch("/api/chat/route_summarize", {
      method: "POST",
      body: JSON.stringify({ messages, summary }),
    });

    const text = await res.text();
    dispatch(setSummary(text));
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    dispatch(addMessage(userMsg));

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [...messages, userMsg],
        summary,
        characterMode,
      }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let aiText = "";

    dispatch(addMessage({ role: "assistant", content: "" }));

    while (true) {
      const { value, done } = await reader!.read();
      if (done) break;
      aiText += decoder.decode(value);
      dispatch(updateLastAssistantMessage(aiText));
    }

    setLoading(false);
    trySummarize();
  };

  // ★ 캐릭터 모드 변경 함수 — 요약 초기화 포함
  const handleCharacterChange = (mode: string) => {
    dispatch(setCharacterMode(mode));
    dispatch(setSummary("")); // 🔥 핵심: 캐릭터 변경 시 요약 초기화
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="hidden md:flex w-[320px] bg-[#f5f5f5] items-center justify-center border-r border-neutral-300">
        <img
          src="/bot.png"
          alt="chatbot character"
          className="w-48 h-auto animate-bounce-slow"
        />
      </div>

      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 */}
        <header className="p-4 border-b flex items-center justify-between">
          <span className="font-semibold">AI Chatbot</span>

          <button
            onClick={() => {
              dispatch(clearChat());
              localStorage.removeItem("chat_state");
            }}
            className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition"
          >
            초기화
          </button>
        </header>

        {/* 캐릭터 선택 */}
        <div className="flex gap-2 p-2 border-b bg-gray-50 text-xs">
          <button
            onClick={() => handleCharacterChange("assistant")}
            className="px-2 py-1 bg-neutral-200 rounded"
          >
            기본 조수
          </button>

          <button
            onClick={() => handleCharacterChange("friendly")}
            className="px-2 py-1 bg-neutral-200 rounded"
          >
            친절
          </button>

          <button
            onClick={() => handleCharacterChange("dev_helper")}
            className="px-2 py-1 bg-neutral-200 rounded"
          >
           비관적
          </button>

          <button
            onClick={() => handleCharacterChange("cute")}
            className="px-2 py-1 bg-neutral-200 rounded"
          >
            귀여움
          </button>
        </div>

        <ChatContainer messages={messages} bottomRef={bottomRef} loading={loading} />
        <InputBar onSend={sendMessage} />
      </div>
    </div>
  );
}
