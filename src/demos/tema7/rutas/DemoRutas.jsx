// Envoltura del laboratorio: navegador simulado con atajos a cada ruta.
import "../tema7.css";
import App from "./App";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";

function DemoRutas() {
  return (
    <NavegadorSimulado atajos={["/", "/tareas", "/tareas/42", "/tareas/nueva", "/xyz"]}>
      <App />
    </NavegadorSimulado>
  );
}

export default DemoRutas;
