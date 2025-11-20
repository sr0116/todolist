import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface BoardCard {
  id: string;
  title: string;
  description: string;
  status: "todo" | "doing" | "done";
  createdAt: string;
}

interface BoardState {
  list: BoardCard[];
}

const initialState: BoardState = {
  list: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addCard: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      state.list.push({
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        status: "todo",
        createdAt: new Date().toISOString(),
      });
    },

    updateStatus: (
      state,
      action: PayloadAction<{ id: string; status: "todo" | "doing" | "done" }>
    ) => {
      const card = state.list.find((c) => c.id === action.payload.id);
      if (card) card.status = action.payload.status;
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCard, updateStatus, deleteCard } = boardsSlice.actions;
export default boardsSlice.reducer;
