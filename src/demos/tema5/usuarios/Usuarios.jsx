import { useEffect, useState } from "react";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/users";

function Usuarios() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  log("render", "Usuarios", { cargando, error, usuarios: datos.length }); // lab

  useEffect(() => {
    const cargar = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Error de red");
        const json = await res.json();
        setDatos(json);
        log("state", "setDatos", { usuarios: json.length }); // lab
      } catch (err) {
        setError(err.message);
        log("state", "setError", { mensaje: err.message }); // lab
      } finally {
        setCargando(false);
        log("state", "finally: setCargando(false)"); // lab
      }
    };
    cargar();
  }, []);

  if (cargando) return <p className="alerta alerta-advertencia">Cargando usuarios...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <ul className="lista">
      {datos.map((u) => (
        <li key={u.id} className="lista-item">
          <strong>{u.name}</strong>
          <span className="texto-secundario">{u.email}</span>
        </li>
      ))}
    </ul>
  );
}

export default Usuarios;
