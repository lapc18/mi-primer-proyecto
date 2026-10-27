import { useCallback } from "react";
import { TareasContext } from "./TareasContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { log } from "../lab/devlog"; // lab

function TareasProvider({ children }) {
  const [tareas, setTareas] = useLocalStorage("tf-tareas", []);
  log("render", "TareasProvider", { tareas: tareas.length }); // lab

  const agregar = useCallback((titulo) => {
    const nueva = { id: Date.now(), titulo, estado: "Pendiente" };
    log("state", "agregar", nueva); // lab
    setTareas((prev) => [...prev, nueva]);
  }, [setTareas]);

  const eliminar = useCallback((id) => {
    log("state", "eliminar", { id }); // lab
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }, [setTareas]);

  const completar = useCallback((id) => {
    log("state", "completar", { id }); // lab
    setTareas((prev) => prev.map((t) =>
      t.id === id ? { ...t, estado: "Completada" } : t));
  }, [setTareas]);

  const value = { tareas, agregar, eliminar, completar };

  return (
    <TareasContext value={value}>{children}</TareasContext>
  );
}

export default TareasProvider;
