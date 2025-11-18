import "./globals.css";
import Provider from "./provider";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
    <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Provider>
      <div className="flex w-full min-h-screen">
        <Sidebar />

        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-6 flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </Provider>
    </body>
    </html>
  );
}
