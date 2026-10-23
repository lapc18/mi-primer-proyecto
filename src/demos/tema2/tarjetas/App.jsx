import Tarjeta from "./Tarjeta";

function App() {
  return (
    <div className="tarjetas">
      <Tarjeta nombre="Ana" rol="Frontend" emoji="💻" />
      <Tarjeta nombre="Luis" rol="Backend" emoji="⚙️" />
      <Tarjeta nombre="Sara" rol="Diseño" emoji="🎨" />
    </div>
  );
}

export default App;
