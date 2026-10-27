// Envoltura del laboratorio: la misma ruta /tareas/:id con distintos id.
import { Route, Routes } from "react-router";
import "../../tema6/comparacion.css";
import "../tema7.css";
import DetallePage from "./DetallePage";
import BuscarTarea from "./BuscarTarea";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";

function DemoUseParams() {
  return (
    <NavegadorSimulado inicial="/tareas/42" atajos={["/tareas/1", "/tareas/42", "/tareas/999"]}>
      <Routes>
        <Route
          path="/tareas/:id"
          element={
            <div className="pila">
              <DetallePage />
              <BuscarTarea />
            </div>
          }
        />
        <Route path="*" element={<p>Prueba con /tareas/42</p>} />
      </Routes>
    </NavegadorSimulado>
  );
}

export default DemoUseParams;
