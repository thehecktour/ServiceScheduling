import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  fetchAppointments,
  completeAppointment,
} from "../features/appointments/appointmentsSlice";

export default function History() {
  const dispatch = useAppDispatch();
  const appointments = useAppSelector((state) => state.appointments.items);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  const handleComplete = (id: number) => {
    dispatch(completeAppointment(id));
  };

  const getColor = (status: string) => {
    switch (status) {
      case "pending":
        return "orange";
      case "confirmed":
        return "blue";
      case "cancelled":
        return "red";
      case "completed":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <h2>Histórico de Agendamentos</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a.id} style={{ marginBottom: 12 }}>
            <span>
              <strong>Serviço ID:</strong> {a.service} -{" "}
              <strong>Data:</strong> {new Date(a.date_time).toLocaleString()}
            </span>
            <span
              style={{
                backgroundColor: getColor(a.status),
                color: "white",
                padding: "2px 8px",
                borderRadius: 4,
                marginLeft: 8,
              }}
            >
              {a.status}
            </span>

            {a.status !== "completed" && (
              <button
                onClick={() => handleComplete(a.id)}
                style={{
                  marginLeft: 12,
                  padding: "4px 8px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                }}
              >
                Concluir
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
