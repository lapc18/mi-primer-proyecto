import { useState } from "react";
import TareasDeUsuario from "./TareasDeUsuario";

const USUARIOS = [1, 2, 3, 4, 5];

function PanelUsuarios() {
  const [usuarioId, setUsuarioId] = useState(1);

  return (
    <div className="pila">
      <div>
        <label className="etiqueta" htmlFor="t6-usuario">
          Usuario
        </label>
        <select
          id="t6-usuario"
          className="campo"
          value={usuarioId}
          onChange={(e) => setUsuarioId(Number(e.target.value))}
        >
          {USUARIOS.map((id) => (
            <option key={id} value={id}>
              Usuario {id}
            </option>
          ))}
        </select>
      </div>
      <TareasDeUsuario key={usuarioId} usuarioId={usuarioId} />
    </div>
  );
}

export default PanelUsuarios;
