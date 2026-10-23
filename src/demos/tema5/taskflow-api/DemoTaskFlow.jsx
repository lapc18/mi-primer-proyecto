// Envoltura del laboratorio: TaskFlow final con controles de red.
import App from "../../../taskflow/App";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function DemoTaskFlow() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch
        modos={["exito", "demora", "error404", "sinRed"]}
        modo={modo}
        onCambiar={cambiar}
      />
      <App key={ejecucion} />
    </div>
  );
}

export default DemoTaskFlow;
