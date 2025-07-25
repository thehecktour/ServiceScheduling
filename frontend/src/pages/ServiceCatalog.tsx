import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchServices } from "../features/services/servicesSlice";

export default function ServiceCatalog() {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.services.items);

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  return (
    <div>
      <h2>Catálogo de Serviços</h2>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            <strong>{s.name}</strong> - {s.description} ({s.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
}
