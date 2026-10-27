import { createSlice } from "@reduxjs/toolkit";

const tareasSlice = createSlice({
  name: "tareas",
  initialState: [],
  reducers: {
    agregar: (state, action) => {
      state.push(action.payload);
    },
    eliminar: (state, action) =>
      state.filter((t) => t.id !== action.payload),
  },
});

export const { agregar, eliminar } = tareasSlice.actions;
export default tareasSlice.reducer;
