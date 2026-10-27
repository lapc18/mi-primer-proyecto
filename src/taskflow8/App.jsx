import { Routes, Route } from "react-router";
import useTema from "../hooks/useTema";
import Navbar from "./components/Navbar";
import HomePage from "../taskflow7/pages/HomePage";
import TareasPage from "./pages/TareasPage";
import DetallePage from "./pages/DetallePage";
import Pagina404 from "../taskflow7/pages/Pagina404";
import "../context/tema.css";
import "../taskflow7/TaskFlow7.css";
import { log } from "../lab/devlog"; // lab

function App() {
  const { tema } = useTema();
  log("render", "App (TaskFlow 8): las rutas ya no pasan props", { tema }); // lab

  return (
    <div className={tema}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tareas" element={<TareasPage />} />
        <Route path="/tareas/:id" element={<DetallePage />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </div>
  );
}

export default App;
