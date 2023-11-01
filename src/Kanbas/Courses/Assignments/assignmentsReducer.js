import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  module: { title: "New Assignment", description: "New Assignment Description" },
};


const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteModule: (state, action) => {
      state.assignments = state.assignments.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.assignments = state.assignments.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.assignments = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule } = assignmentSlice.actions;
export default assignmentSlice.reducer;