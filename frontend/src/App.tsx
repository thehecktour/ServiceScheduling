import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Auth from "./pages/Auth";
import ServiceCatalog from "./pages/ServiceCatalog";
import AppointmentForm from "./pages/AppointmentForm";
import History from "./pages/History";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<ServiceCatalog />} />
            <Route path="/agendar" element={<AppointmentForm />} />
            <Route path="/historico" element={<History />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
