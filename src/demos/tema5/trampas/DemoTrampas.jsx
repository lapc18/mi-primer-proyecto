// Envoltura del laboratorio: las dos trampas lado a lado con sus controles.
import { useState } from "react";
import "./DemoTrampas.css";
import ConteoMal from "./ConteoMal";
import ConteoBien from "./ConteoBien";
import TernariosAnidados from "./TernariosAnidados";
import ConEarlyReturn from "./ConEarlyReturn";
import { log } from "../../../lab/devlog";

const TAREAS = [
  { id: 1, titulo: "Repasar &&" },
  { id: 2, titulo: "Evitar el 0" },
];

const ESTADOS = ["cargando", "error", "vacio", "datos"];

function claseBoton(activo) {
  return activo ? "boton boton-chico boton-primario" : "boton boton-chico boton-secundario";
}

function DemoTrampas() {
  const [conTareas, setConTareas] = useState(false);
  const [estado, setEstado] = useState("cargando");
  const tareas = conTareas ? TAREAS : [];

  const elegirTareas = (valor) => {
    log("state", valor ? "tareas con 2 elementos" : "tareas = [] (length es 0)");
    setConTareas(valor);
  };

  const elegirEstado = (nuevo) => {
    log("state", `estado = "${nuevo}"`);
    setEstado(nuevo);
  };

  return (
    <div className="pila">
      <section className="pila">
        <div className="lab-controles">
          <div className="fila" role="group" aria-label="Lista de tareas">
            <span className="etiqueta">Trampa 1 · tareas:</span>
            <button type="button" className={claseBoton(!conTareas)} aria-pressed={!conTareas} onClick={() => elegirTareas(false)}>
              Vacía
            </button>
            <button type="button" className={claseBoton(conTareas)} aria-pressed={conTareas} onClick={() => elegirTareas(true)}>
              Con 2 tareas
            </button>
          </div>
        </div>
        <div className="trampas-par">
          <div className="tarjeta pila trampa trampa-mal">
            <h3>❌ lista.length &amp;&amp;</h3>
            <ConteoMal tareas={tareas} />
          </div>
          <div className="tarjeta pila trampa trampa-bien">
            <h3>✅ lista.length &gt; 0 &amp;&amp;</h3>
            <ConteoBien tareas={tareas} />
          </div>
        </div>
      </section>

      <section className="pila">
        <div className="lab-controles">
          <div className="fila" role="group" aria-label="Estado">
            <span className="etiqueta">Trampa 2 · estado:</span>
            {ESTADOS.map((e) => (
              <button key={e} type="button" className={claseBoton(e === estado)} aria-pressed={e === estado} onClick={() => elegirEstado(e)}>
                {e}
              </button>
            ))}
          </div>
        </div>
        <div className="trampas-par">
          <div className="tarjeta pila trampa trampa-mal">
            <h3>❌ Ternarios anidados</h3>
            <TernariosAnidados estado={estado} />
          </div>
          <div className="tarjeta pila trampa trampa-bien">
            <h3>✅ Early return</h3>
            <ConEarlyReturn estado={estado} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DemoTrampas;
