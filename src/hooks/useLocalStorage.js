import { useState, useEffect } from "react";
import { log } from "../lab/devlog"; // lab

function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    log("calculo", `localStorage.getItem("${clave}")`); // lab
    try {
      const guardado = localStorage.getItem(clave);
      return guardado !== null
        ? JSON.parse(guardado)
        : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
    log("effect", `localStorage.setItem("${clave}")`, valor); // lab
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;
