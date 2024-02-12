import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./reducers/alert";
import {thunk} from "redux-thunk";

const store = configureStore({
  middleware: [thunk],
  reducer: { alert: alertReducer },
});

export default store;
