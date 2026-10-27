// Envoltura del laboratorio: navigate("/tareas") después de guardar, y navigate(-1)
// cuando se entra directo por un link compartido.
import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import "../../tema6/comparacion.css";
import "../tema7.css";
import NuevaTarea from "./NuevaTarea";
import VolverAtras from "./VolverAtras";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";
import { log } from "../../../lab/devlog";

function ListaTareas({ tareas }) {
  return (
    <div className="t7-pagina">
      <h2>Tareas</h2>
      <ul>
        {tareas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
      <Link to="/tareas/nueva">+ Nueva tarea</Link>
    </div>
  );
}

function DemoUseNavigate() {
  const [tareas, setTareas] = useState([{ id: 1, titulo: "Repasar useParams" }]);

  const agregar = (titulo) => {
    log("state", "onAgregar", { titulo });
    setTareas((prev) => [...prev, { id: Date.now(), titulo }]);
  };

  return (
    <div className="t6-par">
      <div className="tarjeta t6-lado t6-lado-neutro t7-formulario">
        <h3>1 · navigate después de guardar</h3>
        <NavegadorSimulado inicial="/tareas/nueva">
          <Routes>
            <Route path="/tareas" element={<ListaTareas tareas={tareas} />} />
            <Route path="/tareas/nueva" element={<NuevaTarea onAgregar={agregar} />} />
            <Route path="*" element={<p>Esta demo solo tiene /tareas y /tareas/nueva.</p>} />
          </Routes>
        </NavegadorSimulado>
      </div>
      <div className="tarjeta t6-lado t6-lado-mal t7-formulario">
        <h3>2 · navigate(-1) sin historial</h3>
        <NavegadorSimulado inicial="/tareas/3">
          <Routes>
            <Route path="/tareas/:id" element={<VolverAtras />} />
            <Route path="*" element={<p>Prueba con /tareas/3.</p>} />
          </Routes>
        </NavegadorSimulado>
        <p className="texto-secundario">Entraste directo a /tareas/3, como con un link compartido.</p>
      </div>
    </div>
  );
}

export default DemoUseNavigate;
