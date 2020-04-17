import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
export default function () {
  return configureStore({
    reducer,
    // Order of the middleware function matters
    middleware: [
      ...getDefaultMiddleware(),
      logger("A simple parameter to middleware function"),
      func,
    ],
  });
}
