import { useContext } from "react";
import { TareasContext } from "../context/TareasContext";

function useTareas() {
  const contexto = useContext(TareasContext);
  if (!contexto) throw new Error("Falta <TareasProvider>");
  return contexto;
}

export default useTareas;
