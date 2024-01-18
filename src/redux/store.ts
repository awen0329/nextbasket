import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer, { rootPersistConfig } from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  // Use persistReducer to enable data persistence
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, persistor, dispatch, useSelector, useDispatch };
