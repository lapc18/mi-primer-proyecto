import { useState } from "react";

export default function Buscador({
  // eslint-disable-next-line no-unused-vars
  onBuscar = (x) => {},
}) {
  const [texto, setTexto] = useState("");

  const buscar = (e) => {
    const value = e.target.value;
    setTexto(value);
    onBuscar(value);
  };

  return (
    <input
      placeholder="Introduce el valor a buscar aqui..."
      style={{ width: "60%", marginRight: "auto", marginLeft: "auto" }}
      value={texto}
      onChange={buscar}
    />
  );
}
