import { db } from "./index";
import create from "zustand";

const [useStore] = create(set => ({
  notebooks: db.notebooks.all,
  addNotebook: async notebook => {
    if (await db.notebooks.add(notebook)) {
      set({ notebooks: db.notebooks.all });
    }
  }
}));

export default useStore;
