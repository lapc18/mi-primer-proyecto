import { useEffect, useState } from "react";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=3";

function CargaUnaVez() {
  const [tareas, setTareas] = useState([]);
  log("render", "CargaUnaVez", { tareas: tareas.length }); // lab

  // ✅ Con [] corre una sola vez, al montar
  useEffect(() => {
    log("effect", "[]: cargar tareas al montar"); // lab
    const cargarTareas = async () => {
      const res = await fetch(URL);
      setTareas(await res.json());
    };
    cargarTareas();
  }, []);

  return <p className="texto-secundario">{tareas.length} tareas cargadas</p>;
}

export default CargaUnaVez;
