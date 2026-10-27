import { Route, Routes } from "react-router";
import Navbar from "../../../taskflow7/components/Navbar";
import HomePage from "./pages/HomePage";
import TareasPage from "./pages/TareasPage";
import DetallePage from "./pages/DetallePage";
import NuevaPage from "./pages/NuevaPage";
import Pagina404 from "./pages/Pagina404";

// Las rutas están desordenadas a propósito:
// Routes no elige la primera, sino la más específica.
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Pagina404 />} />
        <Route path="/tareas/:id" element={<DetallePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/tareas/nueva" element={<NuevaPage />} />
        <Route path="/tareas" element={<TareasPage />} />
      </Routes>
    </>
  );
}

export default App;
