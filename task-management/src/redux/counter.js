import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dltID: null,
  tasksData: [
    {
      id: 1,
      title: "Abc",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
      status: true,
    },
    {
      id: 2,
      title: "Abc",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
      status: true,
    },
    {
      id: 3,
      title: "Abc",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
      status: true,
    },
    {
      id: 4,
      title: "Abc",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
      status: true,
    },
    {
      id: 5,
      title: "Abc",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
      status: true,
    },
    {
      id: 6,
      title: "Abc",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, temporibus!",
      status: true,
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDltId: (state, action) => {
      state.dltID = action.payload;
    },
    setTasksData: (state, action) => {
      state.tasksData = action.payload;
    },
    appendTasksData: (state, action) => {
      state.tasksData = [...state.tasksData, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDltId, appendTasksData, setTasksData } = counterSlice.actions;

export default counterSlice.reducer;
