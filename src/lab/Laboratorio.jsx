import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import "./lab.css";
import "./simuladorFetch";
import PASOS, { TEMAS } from "./pasos";
import VisorCodigo from "./VisorCodigo";
import PanelLogs from "./PanelLogs";
import LimiteError from "./LimiteError";
import { descartarCleanupsDesde, limpiar, marca } from "./devlog";

// Se monta junto con cada demo. Su efecto corre después de los cleanup de la
// demo anterior y antes de los efectos de la nueva, así que descarta esos
// cleanup viejos. El ref evita repetirlo en el remontaje de StrictMode, cuyos
// cleanup sí son de la demo nueva y deben verse.
function Marcador() {
  const [desde] = useState(marca);
  const hecho = useRef(false);
  useEffect(() => {
    if (hecho.current) return;
    hecho.current = true;
    descartarCleanupsDesde(desde);
  }, [desde]);
  return null;
}

// Al cambiar de paso se limpia el log ANTES de avisar a React, para que los
// renders y efectos de la nueva demo queden registrados.
function suscribirHash(avisar) {
  const alCambiar = () => {
    limpiar();
    avisar();
  };
  window.addEventListener("hashchange", alCambiar);
  return () => window.removeEventListener("hashchange", alCambiar);
}

function leerHash() {
  return window.location.hash;
}

function irAPaso(indice) {
  const paso = PASOS[indice];
  if (paso) window.location.hash = `#/${paso.id}`;
}

function Laboratorio({ estricto, onCambiarEstricto }) {
  const hash = useSyncExternalStore(suscribirHash, leerHash);
  const encontrado = PASOS.findIndex((p) => `#/${p.id}` === hash);
  const indice = encontrado === -1 ? 0 : encontrado;
  const paso = PASOS[indice];

  const [reinicios, setReinicios] = useState(0);
  const [conLateral, setConLateral] = useState(true);

  useEffect(() => {
    const alPresionarTecla = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.target.closest?.("input, textarea, select, [contenteditable='true']")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        irAPaso(indice + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        irAPaso(indice - 1);
      }
    };
    window.addEventListener("keydown", alPresionarTecla);
    return () => window.removeEventListener("keydown", alPresionarTecla);
  }, [indice]);

  const reiniciar = () => {
    limpiar();
    setReinicios((prev) => prev + 1);
  };

  return (
    <div className="lab">
      <header className="lab-barra">
        <button
          type="button"
          className="boton boton-chico boton-secundario"
          aria-expanded={conLateral}
          aria-controls="lab-lateral"
          onClick={() => setConLateral((prev) => !prev)}
        >
          ☰ Pasos
        </button>
        <span className="lab-marca">Talendig</span>
        <span className="lab-curso">Desarrollo Frontend con React</span>
        <div className="lab-barra-acciones">
          <button
            type="button"
            role="switch"
            aria-checked={estricto}
            className="lab-interruptor"
            onClick={onCambiarEstricto}
          >
            <span className="lab-interruptor-pista" aria-hidden="true">
              <span className="lab-interruptor-perilla" />
            </span>
            <span>
              <code>StrictMode</code> {estricto ? "activado" : "desactivado"}
            </span>
          </button>
        </div>
      </header>

      <div className={conLateral ? "lab-cuerpo" : "lab-cuerpo lab-cuerpo-sin-lateral"}>
        {conLateral && (
          <nav id="lab-lateral" className="lab-lateral" aria-label="Pasos del laboratorio">
            {Object.entries(TEMAS).map(([numero, nombre]) => (
              <section key={numero} className="lab-lateral-tema">
                <h2 className="lab-lateral-titulo">
                  Tema {numero} · {nombre}
                </h2>
                <ul className="lab-lateral-lista">
                  {PASOS.filter((p) => p.tema === Number(numero)).map((p) => (
                    <li key={p.id}>
                      <a
                        href={`#/${p.id}`}
                        className="lab-lateral-enlace"
                        aria-current={p.id === paso.id ? "page" : undefined}
                      >
                        <span className="lab-lateral-id">{p.id}</span>
                        {p.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        )}

        <main className="lab-principal">
          <section className="lab-encabezado">
            <div className="lab-encabezado-fila">
              <span className="pill">
                Tema {paso.tema} · {TEMAS[paso.tema]}
              </span>
              <div className="lab-navegacion">
                <button
                  type="button"
                  className="boton boton-chico boton-secundario"
                  disabled={indice === 0}
                  onClick={() => irAPaso(indice - 1)}
                >
                  ← Anterior
                </button>
                <button
                  type="button"
                  className="boton boton-chico boton-secundario"
                  disabled={indice === PASOS.length - 1}
                  onClick={() => irAPaso(indice + 1)}
                >
                  Siguiente →
                </button>
              </div>
            </div>
            <h1 className="lab-titulo">
              <span className="lab-titulo-ubicacion">
                Tema {paso.tema} · Slide {paso.slide} —
              </span>{" "}
              {paso.titulo}
            </h1>
            <p className="alerta alerta-info lab-observar">
              <strong>Qué observar:</strong> {paso.observar}
            </p>
          </section>

          <div className="lab-escenario">
            <section className="lab-demo" aria-label="Demo en vivo">
              <div className="lab-demo-barra">
                <h2 className="lab-demo-titulo">Demo en vivo</h2>
                <button
                  type="button"
                  className="boton boton-chico boton-secundario"
                  onClick={reiniciar}
                >
                  ↺ Reiniciar demo
                </button>
              </div>
              <div className="lab-demo-cuerpo">
                <Marcador key={`marca-${paso.id}-${reinicios}`} />
                <LimiteError key={`${paso.id}-${reinicios}`}>
                  <paso.Componente />
                </LimiteError>
              </div>
            </section>
            <VisorCodigo key={paso.id} archivos={paso.fuente} />
          </div>

          <PanelLogs />
        </main>
      </div>

      <footer className="lab-pie">
        Contenido oficial de Talendig · Paso {paso.id} ({indice + 1} de {PASOS.length})
        <span className="lab-pie-atajos">← → cambian de paso</span>
      </footer>
    </div>
  );
}

export default Laboratorio;
