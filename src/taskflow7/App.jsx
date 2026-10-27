import { Routes, Route } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TareasPage from "./pages/TareasPage";
import DetallePage from "./pages/DetallePage";
import Pagina404 from "./pages/Pagina404";
import "./TaskFlow7.css";
import { log } from "../lab/devlog"; // lab

function App() {
  const [tareas, setTareas] = useLocalStorage("tf-tareas", []);
  log("render", "App (TaskFlow 7): las tareas bajan por props", { tareas: tareas.length }); // lab

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tareas"
          element={<TareasPage tareas={tareas} setTareas={setTareas} />} />
        <Route path="/tareas/:id"
          element={<DetallePage tareas={tareas} setTareas={setTareas} />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </>
  );
}

export default App;
