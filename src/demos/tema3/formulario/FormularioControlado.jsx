import { useState } from "react";
import { log } from "../../../lab/devlog"; // lab

function FormularioControlado() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const cambiarNombre = (e) => {
    setNombre(e.target.value);
    log("state", "setNombre", { valor: e.target.value }); // lab
  };

  const cambiarEmail = (e) => {
    setEmail(e.target.value);
    log("state", "setEmail", { valor: e.target.value }); // lab
  };

  const enviar = (e) => {
    e.preventDefault();
    const datos = { nombre, email };
    console.log(datos);
    log("event", "Formulario enviado", datos); // lab
  };

  return (
    <form className="pila" onSubmit={enviar}>
      <div>
        <label className="etiqueta" htmlFor="nombre">
          Nombre
        </label>
        <input id="nombre" className="campo" value={nombre} onChange={cambiarNombre} />
      </div>
      <div>
        <label className="etiqueta" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="campo"
          value={email}
          onChange={cambiarEmail}
        />
      </div>
      <p className="texto-secundario">
        Vista previa: {nombre || "…"} · {email || "…"}
      </p>
      <div>
        <button className="boton boton-primario" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormularioControlado;
