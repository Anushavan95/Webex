import { configureStore } from "@reduxjs/toolkit";
import presentationSlice from "../createSlice/presentationSlice";

export default configureStore({
  reducer: {
    initial: presentationSlice,
  },
});
