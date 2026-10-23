import { createRoot } from "react-dom/client";
import "./styles/talendig.css";
import Raiz from "./lab/Raiz.jsx";

// <Raiz /> envuelve el laboratorio en <StrictMode> (activo por defecto) y
// permite apagarlo desde la barra superior para comparar en clase.
createRoot(document.getElementById("root")).render(<Raiz />);
