import { useState, useEffect } from "react";
import { log } from "../lab/devlog"; // lab

function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;
    log("effect", `useFetch [url]: pedir ${url}`); // lab
    const cargar = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error de red");
        if (cancelado) log("event", "Respuesta ignorada: llegó tarde", { url }); // lab
        if (!cancelado) log("state", "useFetch: setDatos", { url }); // lab
        if (!cancelado) setDatos(await res.json());
      } catch (e) {
        if (!cancelado) log("state", "useFetch: setError", { mensaje: e.message }); // lab
        if (!cancelado) setError(e.message);
      } finally {
        if (!cancelado) setCargando(false);
      }
    };
    cargar();
    return () => {
      cancelado = true;
      log("cleanup", "useFetch: cancelado = true", { url }); // lab
    };
  }, [url]);

  return { datos, cargando, error };
}

export default useFetch;
