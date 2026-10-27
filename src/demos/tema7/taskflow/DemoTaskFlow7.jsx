// Envoltura del laboratorio: TaskFlow 7 dentro del navegador simulado.
// En el proyecto real va <BrowserRouter> en main.jsx (ver main.ejemplo.jsx).
import App from "../../../taskflow7/App";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";

function DemoTaskFlow7() {
  return (
    <NavegadorSimulado inicial="/tareas" atajos={["/", "/tareas", "/tareas/1", "/tareas/999", "/xyz"]}>
      <App />
    </NavegadorSimulado>
  );
}

export default DemoTaskFlow7;
