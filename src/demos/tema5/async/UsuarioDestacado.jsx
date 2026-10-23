import { useEffect, useState } from "react";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/users/1";

function UsuarioDestacado() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    log("effect", "El efecto corre y llama a cargar()"); // lab
    // ❌ useEffect(async () => ...) devolvería una promesa
    // ✅ Definimos la función async adentro y la llamamos
    const cargar = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Error de red");
        const datos = await res.json();
        setUsuario(datos);
        log("state", "setUsuario", { nombre: datos.name }); // lab
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  if (cargando) return <p className="alerta alerta-advertencia">Cargando...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <article className="tarjeta">
      <h3>{usuario.name}</h3>
      <p className="texto-secundario">{usuario.email}</p>
    </article>
  );
}

export default UsuarioDestacado;
