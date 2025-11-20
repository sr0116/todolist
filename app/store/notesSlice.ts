"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string; // yyyy-mm-dd HH:mm
}

interface NotesState {
  list: Note[];
}

const initialState: NotesState = {
  list: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    loadNotes: (state, action: PayloadAction<Note[]>) => {
      state.list = action.payload;
    },
    addNote: (state) => {
      const now = new Date().toISOString();
      state.list.push({
        id: nanoid(),
        title: "새 노트",
        content: "",
        updatedAt: now,
      });
    },
    updateNote: (state, action: PayloadAction<{ id: string; title: string; content: string }>) => {
      const target = state.list.find((n) => n.id === action.payload.id);
      if (target) {
        target.title = action.payload.title;
        target.content = action.payload.content;
        target.updatedAt = new Date().toISOString();
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote, loadNotes } = notesSlice.actions;
export default notesSlice.reducer;
