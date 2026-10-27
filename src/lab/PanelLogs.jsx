import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { getSnapshot, limpiar, subscribe } from "./devlog";

const TIPOS = ["render", "state", "calculo", "effect", "cleanup", "fetch", "event", "ruta", "error"];

function PanelLogs() {
  const entradas = useSyncExternalStore(subscribe, getSnapshot);
  const [ocultos, setOcultos] = useState([]);
  const [autoscroll, setAutoscroll] = useState(true);
  const cuerpo = useRef(null);

  const visibles = entradas.filter((e) => !ocultos.includes(e.tipo));

  useEffect(() => {
    if (autoscroll && cuerpo.current) {
      cuerpo.current.scrollTop = cuerpo.current.scrollHeight;
    }
  }, [entradas, ocultos, autoscroll]);

  const alternarTipo = (tipo) => {
    setOcultos((prev) =>
      prev.includes(tipo) ? prev.filter((t) => t !== tipo) : [...prev, tipo],
    );
  };

  const contar = (tipo) => entradas.filter((e) => e.tipo === tipo).length;

  return (
    <section className="logs" aria-label="Panel de logs">
      <div className="logs-barra">
        <h2 className="logs-titulo">Qué pasa por dentro</h2>
        <div className="logs-filtros" role="group" aria-label="Filtrar por tipo">
          {TIPOS.map((tipo) => (
            <button
              key={tipo}
              type="button"
              className={`logs-filtro log-tipo-${tipo}`}
              aria-pressed={!ocultos.includes(tipo)}
              onClick={() => alternarTipo(tipo)}
            >
              {tipo} <span className="logs-filtro-cuenta">{contar(tipo)}</span>
            </button>
          ))}
        </div>
        <label className="logs-autoscroll">
          <input
            type="checkbox"
            checked={autoscroll}
            onChange={(e) => setAutoscroll(e.target.checked)}
          />
          Autoscroll
        </label>
        <button type="button" className="logs-limpiar" onClick={limpiar}>
          Limpiar
        </button>
      </div>
      <div className="logs-cuerpo" ref={cuerpo} aria-live="off">
        {visibles.length === 0 && (
          <p className="logs-vacio">Sin eventos todavía. Interactúa con la demo.</p>
        )}
        {visibles.map((e) => (
          <div key={e.id} className="logs-fila">
            <span className="logs-hora">{e.hora}</span>
            <span className={`logs-tipo log-tipo-${e.tipo}`}>{e.tipo}</span>
            <span className="logs-mensaje">{e.mensaje}</span>
            {e.datos && <code className="logs-datos">{e.datos}</code>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PanelLogs;
