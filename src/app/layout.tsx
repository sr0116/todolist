// 경로: /src/app/layout.tsx

"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="flex justify-center bg-neutral-100 antialiased">
    <div className="w-full max-w-[1200px] min-h-screen bg-white shadow-sm border-x border-neutral-200">
      <Provider store={store}>
        {children}
      </Provider>
    </div>
    </body>
    </html>
  );
}
