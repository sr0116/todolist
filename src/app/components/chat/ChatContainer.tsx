// 경로: /src/components/chat/ChatContainer.tsx
// 대화 메시지 리스트 + 로딩(typing) 표시 + 스크롤 관리

"use client";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import {ChatMessage} from "@/store/slice/chatSlice";

interface Props {
  messages: ChatMessage[];
  bottomRef: React.RefObject<HTMLDivElement | null>;
  loading: boolean;
}

export default function ChatContainer({ messages, bottomRef, loading }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">

      {messages.map((msg, index) => (
        <MessageBubble key={index} role={msg.role} content={msg.content} />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef}></div>
    </div>

  );
}
