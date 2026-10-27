// Envoltura del laboratorio: el detalle con useFetch y la red simulada.
// jsonplaceholder tiene 200 tareas: /tareas/201 da un 404 real.
import { Link, Route, Routes } from "react-router";
import "../tema7.css";
import "../../../taskflow7/TaskFlow7.css";
import DetalleApiPage from "./DetalleApiPage";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function ListaApi() {
  return (
    <div className="t7-pagina">
      <h2>Tareas de la API</h2>
      <div className="t7-enlaces">
        <Link to="/tareas/1">Tarea 1</Link>
        <Link to="/tareas/199">Tarea 199</Link>
        <Link to="/tareas/201">Tarea 201 (no existe)</Link>
      </div>
    </div>
  );
}

function DemoDetalleApi() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "demora"]} modo={modo} onCambiar={cambiar} />
      <NavegadorSimulado key={ejecucion} inicial="/tareas/1" atajos={["/tareas", "/tareas/1", "/tareas/200", "/tareas/201"]}>
        <Routes>
          <Route path="/tareas" element={<ListaApi />} />
          <Route path="/tareas/:id" element={<DetalleApiPage />} />
          <Route path="*" element={<ListaApi />} />
        </Routes>
      </NavegadorSimulado>
    </div>
  );
}

export default DemoDetalleApi;
