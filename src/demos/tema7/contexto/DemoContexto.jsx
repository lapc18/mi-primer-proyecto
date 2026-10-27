// Envoltura del laboratorio: en el proyecto, <TemaProvider> va en main.jsx,
// dentro de <BrowserRouter> y alrededor de <App />.
import "../../../taskflow7/components/Navbar.css";
import TemaProvider from "../../../context/TemaProvider";
import App from "./App";

function DemoContexto() {
  return (
    <TemaProvider>
      <App />
    </TemaProvider>
  );
}

export default DemoContexto;
