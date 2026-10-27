// Marco de navegador para las demos con rutas. El laboratorio ya usa la URL
// real (#/7.2), así que las demos van dentro de un MemoryRouter: la "URL" de
// la demo vive en memoria y se muestra en esta barra de dirección.
import { useEffect, useRef, useState } from "react";
import { MemoryRouter, useLocation, useNavigate, useNavigationType } from "react-router";
import "./NavegadorSimulado.css";
import { log } from "./devlog";

function BarraDireccion({ ruta }) {
  const navigate = useNavigate();
  const [texto, setTexto] = useState(ruta);

  const ir = (e) => {
    e.preventDefault();
    const destino = texto.trim().startsWith("/") ? texto.trim() : `/${texto.trim()}`;
    log("event", `Barra de dirección: ir a ${destino}`);
    navigate(destino);
  };

  return (
    <form className="navegador-form" onSubmit={ir}>
      <input
        className="navegador-direccion"
        aria-label="Barra de dirección"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </form>
  );
}

function Marco({ atajos, children }) {
  const location = useLocation();
  const tipo = useNavigationType();
  const navigate = useNavigate();

  // El ref evita registrar dos veces la misma ubicación cuando StrictMode
  // vuelve a correr el efecto al montar.
  const ultimaKey = useRef(null);
  useEffect(() => {
    if (ultimaKey.current === location.key) return;
    ultimaKey.current = location.key;
    if (location.key === "default") {
      log("ruta", `Carga inicial en ${location.pathname}`);
    } else {
      log("ruta", `${tipo} ${location.pathname}`, { key: location.key });
    }
  }, [location, tipo]);

  const moverse = (pasos) => {
    log("event", pasos < 0 ? "Botón ← (navigate(-1))" : "Botón → (navigate(1))");
    navigate(pasos);
  };

  return (
    <div className="navegador">
      <div className="navegador-barra">
        <button type="button" className="navegador-boton" aria-label="Atrás" onClick={() => moverse(-1)}>
          ←
        </button>
        <button type="button" className="navegador-boton" aria-label="Adelante" onClick={() => moverse(1)}>
          →
        </button>
        <BarraDireccion key={location.key} ruta={location.pathname} />
      </div>
      {atajos.length > 0 && (
        <div className="navegador-atajos" aria-label="Rutas para probar">
          {atajos.map((ruta) => (
            <button key={ruta} type="button" className="navegador-atajo" onClick={() => navigate(ruta)}>
              {ruta}
            </button>
          ))}
        </div>
      )}
      <div className="navegador-contenido">{children}</div>
    </div>
  );
}

function NavegadorSimulado({ inicial = "/", atajos = [], children }) {
  return (
    <MemoryRouter initialEntries={[inicial]}>
      <Marco atajos={atajos}>{children}</Marco>
    </MemoryRouter>
  );
}

export default NavegadorSimulado;
