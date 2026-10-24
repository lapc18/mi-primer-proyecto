import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { log } from "../../../lab/devlog"; // lab

function Notas() {
  const [notas, setNotas] = useLocalStorage("lab-notas", []);
  const [texto, setTexto] = useState("");
  log("render", "Notas", { notas: notas.length }); // lab

  const agregar = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    setNotas((prev) => [...prev, { id: Date.now(), texto: texto.trim() }]);
    setTexto("");
  };

  const eliminar = (id) => {
    setNotas((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="pila">
      <form className="fila" onSubmit={agregar}>
        <input
          className="campo"
          placeholder="Nueva nota"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="boton boton-primario" type="submit">
          Agregar
        </button>
      </form>
      <ul className="lista">
        {notas.map((n) => (
          <li key={n.id} className="lista-item">
            <span>{n.texto}</span>
            <button className="boton boton-chico boton-peligro" onClick={() => eliminar(n.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notas;
