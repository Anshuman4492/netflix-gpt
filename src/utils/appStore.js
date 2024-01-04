import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvshowsSlice from "./tvshowsSlice";
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvshows: tvshowsSlice,
    gpt: gptReducer,
    config: configSlice,
  },
});
export default appStore;
