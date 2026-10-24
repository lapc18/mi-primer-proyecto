// Envoltura del laboratorio: demora aleatoria para que las respuestas lleguen fuera de orden.
import PanelUsuarios from "./PanelUsuarios";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function DemoCancelado() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "carrera"]} modo={modo} onCambiar={cambiar} />
      <PanelUsuarios key={ejecucion} />
    </div>
  );
}

export default DemoCancelado;
