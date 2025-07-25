import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

interface Appointment {
  id: number;
  service: number;
  date_time: string;
  status: string;
}

interface AppointmentsState {
  items: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchAppointments = createAsyncThunk("appointments/fetch", async () => {
  const res = await api.get("/appointments/");
  return res.data;
});

export const createAppointment = createAsyncThunk(
  "appointments/create",
  async (data: Omit<Appointment, "id">) => {
    const res = await api.post("/appointments/", data);
    return res.data;
  }
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default appointmentsSlice.reducer;
