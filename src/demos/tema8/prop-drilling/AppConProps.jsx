import { useState } from "react";
import { log } from "../../../lab/devlog"; // lab

const OTRO = { Ana: "Luis", Luis: "Ana" }; // lab

function App() {
  const [usuario, setUsuario] = useState({ nombre: "Ana" });
  log("render", "❌ App (tiene el usuario)", usuario); // lab
  const cambiar = () => setUsuario((u) => ({ nombre: OTRO[u.nombre] })); // lab
  return (
    <div className="pila">
      <button className="boton boton-secundario" onClick={cambiar}>Cambiar usuario</button>{/* lab */}
      <Layout usuario={usuario} />
    </div>
  );
}
function Layout({ usuario }) {
  log("render", "❌ Layout (solo lo pasa)"); // lab
  return <Sidebar usuario={usuario} />; // solo lo pasa
}
function Sidebar({ usuario }) {
  log("render", "❌ Sidebar (solo lo pasa)"); // lab
  return <Perfil usuario={usuario} />; // solo lo pasa
}
function Perfil({ usuario }) {
  log("render", "❌ Perfil (el único que lo usa)", usuario); // lab
  return <h2>{usuario.nombre}</h2>; // el único que lo usa
}

export default App;
