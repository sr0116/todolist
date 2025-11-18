import "./globals.css";
import StoreProvider from "./store/StoreProvider";

export const metadata = {
  title: "Todo App",
  description: "Redux Toolkit Todo App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
    <body>
    <StoreProvider>
      {children}
    </StoreProvider>
    </body>
    </html>
  );
}
