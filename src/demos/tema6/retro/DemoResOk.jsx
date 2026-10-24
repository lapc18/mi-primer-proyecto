// Envoltura del laboratorio: las dos versiones con la misma red simulada.
import "../comparacion.css";
import SinResOk from "./SinResOk";
import ConResOk from "./ConResOk";
import ControlesFetch from "../../../lab/ControlesFetch";
import LimiteError from "../../../lab/LimiteError";
import useSimulacion from "../../../lab/useSimulacion";

function DemoResOk() {
  const { modo, ejecucion, cambiar } = useSimulacion();

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "error404"]} modo={modo} onCambiar={cambiar} />
      <div className="t6-par">
        <div className="tarjeta t6-lado t6-lado-mal">
          <h3>❌ Sin res.ok</h3>
          <LimiteError key={`mal-${ejecucion}`}>
            <SinResOk />
          </LimiteError>
        </div>
        <div className="tarjeta t6-lado t6-lado-bien">
          <h3>✅ Con res.ok</h3>
          <ConResOk key={`bien-${ejecucion}`} />
        </div>
      </div>
    </div>
  );
}

export default DemoResOk;
