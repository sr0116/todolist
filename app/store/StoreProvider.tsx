"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { loadTodos } from "./todoSlice";

function InitLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        dispatch(loadTodos(JSON.parse(saved)));
      } catch (error) {
        console.error("Failed to load saved todos");
      }
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <InitLoader>
        {children}
      </InitLoader>
    </Provider>
  );
}
