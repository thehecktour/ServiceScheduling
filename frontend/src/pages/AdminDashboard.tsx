import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchAppointments } from "../features/appointments/appointmentsSlice";

export default function AdminDashboard() {
  const dispatch = useAppDispatch();
  const appointments = useAppSelector((state) => state.appointments.items);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <div>
      <h2>Todos os Agendamentos</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            Serviço: {a.service} - {a.date_time} - {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
