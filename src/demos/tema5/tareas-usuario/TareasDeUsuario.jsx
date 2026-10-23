import { useEffect, useState } from "react";
import Resultado from "./Resultado";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos";
const USUARIOS = [1, 2, 3, 4, 5];

function TareasDeUsuario() {
  const [usuarioId, setUsuarioId] = useState(1);
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignorar = false;
    log("effect", `[usuarioId]: pedir tareas del usuario ${usuarioId}`); // lab

    const cargar = async () => {
      try {
        const res = await fetch(`${URL}?userId=${usuarioId}`);
        if (!res.ok) throw new Error("Error de red");
        const datos = await res.json();
        if (ignorar) log("event", `Respuesta del usuario ${usuarioId} ignorada (llegó tarde)`); // lab
        if (!ignorar) log("state", `setTareas con las del usuario ${usuarioId}`, { tareas: datos.length }); // lab
        if (!ignorar) setTareas(datos);
      } catch (err) {
        if (!ignorar) setError(err.message);
      } finally {
        if (!ignorar) setCargando(false);
      }
    };
    cargar();

    return () => {
      ignorar = true;
      log("cleanup", `ignorar = true para el usuario ${usuarioId}`); // lab
    };
  }, [usuarioId]);

  const cambiarUsuario = (e) => {
    setUsuarioId(Number(e.target.value));
    setCargando(true);
    setError(null);
  };

  return (
    <div className="pila">
      <div>
        <label className="etiqueta" htmlFor="usuario">
          Usuario
        </label>
        <select id="usuario" className="campo" value={usuarioId} onChange={cambiarUsuario}>
          {USUARIOS.map((id) => (
            <option key={id} value={id}>
              Usuario {id}
            </option>
          ))}
        </select>
      </div>
      <Resultado usuarioId={usuarioId} tareas={tareas} cargando={cargando} error={error} />
    </div>
  );
}

export default TareasDeUsuario;
