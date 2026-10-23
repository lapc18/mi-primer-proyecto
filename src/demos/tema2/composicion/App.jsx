import Header from "./Header";
import Lista from "./Lista";
import { log } from "../../../lab/devlog"; // lab

function App() {
  const equipo = [
    { id: 1, nombre: "Ana", rol: "Frontend", emoji: "💻" },
    { id: 2, nombre: "Luis", rol: "Backend", emoji: "⚙️" },
    { id: 3, nombre: "Sara", rol: "Diseño", emoji: "🎨" },
  ];
  log("render", "App (raíz del árbol)"); // lab

  return (
    <div className="pila">
      <Header titulo="Mi Equipo" />
      <Lista datos={equipo} />
    </div>
  );
}

export default App;
