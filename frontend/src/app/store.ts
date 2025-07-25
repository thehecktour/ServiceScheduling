import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import servicesReducer from "../features/services/servicesSlice.ts";
import appointmentsReducer from "../features/appointments/appointmentsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
    appointments: appointmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
