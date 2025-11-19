"use client";

import {Provider as ReduxProvider, useSelector} from "react-redux";
import {store} from "./store/store";
import {RootState} from "./store/store";
import {useEffect} from "react";
import InitLoader from "@/app/InitLoader";

function ThemeHandler() {
  const theme = useSelector((state: RootState) => state.ui.theme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return null;
}

export default function Provider({children}: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <InitLoader>
        <ThemeHandler/>
        {children}
      </InitLoader>
    </ReduxProvider>
  );
}
