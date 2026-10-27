import { useContext } from "react";
import { UsuarioContext } from "./UsuarioContext";
import UsuarioProvider from "./UsuarioProvider";
import { log } from "../../../lab/devlog"; // lab

function App() {
  log("render", "✅ App"); // lab
  return (
    <UsuarioProvider>
      <Layout />
    </UsuarioProvider>
  );
}
function Layout() {
  log("render", "✅ Layout (ya no recibe props)"); // lab
  return <Sidebar />;
}
function Sidebar() {
  log("render", "✅ Sidebar (ya no recibe props)"); // lab
  return <Perfil />;
}
function Perfil() {
  const { usuario, cambiar } = useContext(UsuarioContext);
  log("render", "✅ Perfil lee el usuario directo", usuario); // lab
  return (
    <div className="pila">
      <button className="boton boton-secundario" onClick={cambiar}>Cambiar usuario</button>
      <h2>{usuario.nombre}</h2>
    </div>
  );
}

export default App;
