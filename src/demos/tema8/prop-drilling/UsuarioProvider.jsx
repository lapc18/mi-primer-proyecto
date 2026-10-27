import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";
import { log } from "../../../lab/devlog"; // lab

const OTRO = { Ana: "Luis", Luis: "Ana" };

function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState({ nombre: "Ana" });
  const cambiar = () => setUsuario((u) => ({ nombre: OTRO[u.nombre] }));
  log("render", "✅ UsuarioProvider (tiene el usuario)", usuario); // lab

  return (
    <UsuarioContext value={{ usuario, cambiar }}>
      {children}
    </UsuarioContext>
  );
}

export default UsuarioProvider;
