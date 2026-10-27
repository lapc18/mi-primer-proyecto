import useTema from "../../../hooks/useTema";
import Navbar from "./Navbar";
import "../../../context/tema.css";

function App() {
  const { tema } = useTema();

  return (
    <div className={tema}>
      <Navbar />
      <p>El tema vive en TemaProvider y se lee con useTema().</p>
    </div>
  );
}

export default App;
