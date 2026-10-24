// Envoltura del laboratorio: un mismo hook en dos componentes, con la red simulada.
import "../comparacion.css";
import ListaUsuarios from "./ListaUsuarios";
import ListaTareas from "./ListaTareas";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";

function DemoUseFetch() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "demora", "error404", "sinRed"]} modo={modo} onCambiar={cambiar} />
      <div className="t6-par">
        <div className="tarjeta t6-lado t6-lado-neutro">
          <h3>{"<ListaUsuarios />"}</h3>
          <ListaUsuarios key={`u-${ejecucion}`} />
        </div>
        <div className="tarjeta t6-lado t6-lado-neutro">
          <h3>{"<ListaTareas />"}</h3>
          <ListaTareas key={`t-${ejecucion}`} />
        </div>
      </div>
    </div>
  );
}

export default DemoUseFetch;
