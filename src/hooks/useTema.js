import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

function useTema() {
  const contexto = useContext(TemaContext);
  if (!contexto) throw new Error("Falta <TemaProvider>");
  return contexto;
}

export default useTema;
