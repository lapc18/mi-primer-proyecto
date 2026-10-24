import { useEffect, useState } from "react";
import { useRef } from "react"; // lab
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=3";
const LIMITE = 6; // lab

function LoopInfinito() {
  const [tareas, setTareas] = useState([]);
  const vueltas = useRef(0); // lab
  log("render", "LoopInfinito", { tareas: tareas.length }); // lab

  // ❌ Sin array: corre después de CADA render
  useEffect(() => {
    // lab:inicio
    vueltas.current += 1;
    if (vueltas.current > LIMITE) {
      log("error", `Freno del laboratorio: ${LIMITE} vueltas. Sin él, esto no para nunca.`);
      return;
    }
    log("effect", `Sin array: vuelta ${vueltas.current}`);
    // lab:fin
    const cargarTareas = async () => {
      const res = await fetch(URL);
      setTareas(await res.json());
    };
    cargarTareas();
  });

  return <p className="texto-secundario">{tareas.length} tareas cargadas</p>;
}

export default LoopInfinito;
