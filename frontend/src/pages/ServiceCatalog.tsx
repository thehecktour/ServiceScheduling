import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchServices } from "../features/services/servicesSlice.ts";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default function ServiceCatalog() {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.items);

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  return (
    <Container>
      <h2>Catálogo de Serviços</h2>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            <strong>{s.name}</strong> - {s.description} ({s.duration} min)
          </li>
        ))}
      </ul>
    </Container>
  );
}
