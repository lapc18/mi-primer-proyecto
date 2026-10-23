// Envoltura del laboratorio: controles para simular éxito, demora, 404 y sin red.
import Usuarios from "./Usuarios";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function DemoUsuarios() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch
        modos={["exito", "demora", "error404", "sinRed"]}
        modo={modo}
        onCambiar={cambiar}
      />
      <Usuarios key={ejecucion} />
    </div>
  );
}

export default DemoUsuarios;
