import { log } from "../../../lab/devlog"; // lab

function leerNotas() {
  log("calculo", 'leerNotas(): localStorage.getItem("lab-notas")'); // lab
  const guardado = localStorage.getItem("lab-notas");
  return guardado !== null ? JSON.parse(guardado) : [];
}

export default leerNotas;
