import { useContext } from "react";
import { TemaContext } from "../../../context/TemaContext";
import Navbar from "./Navbar";
import Tarjeta from "./Tarjeta";
import "../../../context/tema.css";

function App() {
  const { tema } = useContext(TemaContext);

  return (
    <div className={tema}>
      <Navbar />
      <Tarjeta />
    </div>
  );
}

export default App;
