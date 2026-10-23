// Envoltura del laboratorio: permite repetir la carga y simular demora.
import UsuarioDestacado from "./UsuarioDestacado";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function DemoAsync() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "demora"]} modo={modo} onCambiar={cambiar} />
      <UsuarioDestacado key={ejecucion} />
    </div>
  );
}

export default DemoAsync;
