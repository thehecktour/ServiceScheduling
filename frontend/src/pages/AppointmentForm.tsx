import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchServices } from "../features/services/servicesSlice.ts";
import { createAppointment } from "../features/appointments/appointmentsSlice";

export default function AppointmentForm() {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.items);
  const [form, setForm] = useState({ service: 1, date_time: "" });

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createAppointment({ ...form, status: "pending" }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Serviço</h2>
      <select onChange={(e) => setForm({ ...form, service: Number(e.target.value) })}>
        {services.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
      <input
        type="datetime-local"
        value={form.date_time}
        onChange={(e) => setForm({ ...form, date_time: e.target.value })}
      />
      <button type="submit">Agendar</button>
    </form>
  );
}
