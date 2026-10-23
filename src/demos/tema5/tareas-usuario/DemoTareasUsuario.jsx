// Envoltura del laboratorio: activa la demora aleatoria para provocar carreras.
import TareasDeUsuario from "./TareasDeUsuario";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function DemoTareasUsuario() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "carrera"]} modo={modo} onCambiar={cambiar} />
      <TareasDeUsuario key={ejecucion} />
    </div>
  );
}

export default DemoTareasUsuario;
