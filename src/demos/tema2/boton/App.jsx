import Boton from "./Boton";
import { log } from "../../../lab/devlog";

function App() {
  const guardar = () => log("event", "Guardado");

  return (
    <div className="fila">
      <Boton texto="Guardar" onClick={guardar} />
      <Boton texto="Enviar" color="#3DE0CF" onClick={guardar} />
      <Boton texto="Sin onClick" color="#F2A541" />
    </div>
  );
}

export default App;
