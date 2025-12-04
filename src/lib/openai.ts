// 경로: /src/lib/openai.ts
// OpenAI SDK 클라이언트 설정

import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 환경변수 사용
});
