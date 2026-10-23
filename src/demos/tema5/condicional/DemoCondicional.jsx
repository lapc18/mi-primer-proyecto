// Envoltura del laboratorio: un selector de estado y las 4 técnicas lado a lado.
import { useState } from "react";
import "./DemoCondicional.css";
import Ternario from "./Ternario";
import ConAnd from "./ConAnd";
import EarlyReturn from "./EarlyReturn";
import VariableJsx from "./VariableJsx";
import { log } from "../../../lab/devlog";

const ESTADOS = ["cargando", "error", "vacio", "datos"];

const USUARIOS = [
  { id: 1, nombre: "Ana García" },
  { id: 2, nombre: "Luis Pérez" },
  { id: 3, nombre: "Sara Díaz" },
];

const TECNICAS = [
  { id: "ternario", nombre: "Ternario", Componente: Ternario },
  { id: "and", nombre: "&&", Componente: ConAnd },
  { id: "early", nombre: "Early return", Componente: EarlyReturn },
  { id: "variable", nombre: "Variable JSX", Componente: VariableJsx },
];

function DemoCondicional() {
  const [estado, setEstado] = useState("cargando");
  const usuarios = estado === "datos" ? USUARIOS : [];

  const elegir = (nuevo) => {
    log("state", `estado = "${nuevo}"`);
    setEstado(nuevo);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <div className="fila" role="group" aria-label="Estado de la petición">
          <span className="etiqueta">Estado:</span>
          {ESTADOS.map((e) => (
            <button
              key={e}
              type="button"
              className={
                e === estado
                  ? "boton boton-chico boton-primario"
                  : "boton boton-chico boton-secundario"
              }
              aria-pressed={e === estado}
              onClick={() => elegir(e)}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
      <div className="condicional-rejilla">
        {TECNICAS.map(({ id, nombre, Componente }) => (
          <section key={id} className="tarjeta pila condicional-celda">
            <h3>{nombre}</h3>
            <Componente estado={estado} usuarios={usuarios} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default DemoCondicional;
