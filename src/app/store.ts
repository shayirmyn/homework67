import {configureStore} from "@reduxjs/toolkit";
import {doorLockReducer} from "../containers/DoorLock/doorLockSlice";

export const store = configureStore({
    reducer: {reducer: doorLockReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;