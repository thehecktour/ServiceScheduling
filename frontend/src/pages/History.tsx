import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchAppointments } from "../features/appointments/appointmentsSlice";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default function History() {
  const dispatch = useAppDispatch();
  const appointments = useAppSelector((state) => state.appointments.items);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <Container>
      <h2>Histórico de Agendamentos</h2>
      <ul>
        {appointments.map((a) => (
          <li key={a.id}>
            Serviço: {a.service} - {a.date_time} - {a.status}
          </li>
        ))}
      </ul>
    </Container>
  );
}
