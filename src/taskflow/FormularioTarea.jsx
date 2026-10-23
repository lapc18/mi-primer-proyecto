import { useState } from "react";

function FormularioTarea({ onAgregar }) {
  const [titulo, setTitulo] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (titulo.trim() === "") return;
    onAgregar(titulo.trim());
    setTitulo("");
  };

  return (
    <form className="fila" onSubmit={enviar}>
      <input
        className="campo"
        placeholder="Nueva tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button className="boton boton-primario" type="submit">
        Agregar
      </button>
    </form>
  );
}

export default FormularioTarea;
