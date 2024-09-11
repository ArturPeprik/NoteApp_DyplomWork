import { create } from "zustand";

const useNoteStore = create((set) => ({
  notes: [],
  addNote: async (note) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    set((state) => ({ notes: [...state.notes, note] }));
  },
  updateNote: async (updatedNote) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    set((state) => ({
      notes: state.notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    }));
  },
  deleteNote: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  },
}));

export default useNoteStore;
