// Envoltura del laboratorio: NavegadorSimulado > TemaProvider > TareasProvider > App.
// En el proyecto real, BrowserRouter y los Providers van en main.jsx (ver main.ejemplo.jsx).
import "../../../taskflow8/TaskFlow8.css";
import App from "../../../taskflow8/App";
import TemaProvider from "../../../context/TemaProvider";
import TareasProvider from "../../../context/TareasProvider";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";
import PanelLabTareas from "./PanelLabTareas";

function DemoTaskFlow8() {
  return (
    <div className="tf8">
      <NavegadorSimulado inicial="/tareas" atajos={["/", "/tareas", "/tareas/1", "/tareas/999"]}>
        <TemaProvider>
          <TareasProvider>
            <PanelLabTareas />
            <App />
          </TareasProvider>
        </TemaProvider>
      </NavegadorSimulado>
    </div>
  );
}

export default DemoTaskFlow8;
