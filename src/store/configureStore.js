import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";
export default function () {
  return configureStore({
    reducer,
    // Order of the middleware function matters
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "Console" }),
      toast,
      api,
    ],
  });
}
