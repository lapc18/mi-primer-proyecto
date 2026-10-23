// Envoltura del laboratorio: muestra la demo y su árbol de componentes.
import "./DemoComposicion.css";
import App from "./App";

function DemoComposicion() {
  return (
    <div className="composicion">
      <App />
      <div className="lab-controles">
        <span className="etiqueta">Árbol de componentes</span>
        <ul className="arbol">
          <li>
            <code>App</code>
            <ul>
              <li>
                <code>Header</code> <span className="texto-secundario">titulo=&quot;Mi Equipo&quot;</span>
              </li>
              <li>
                <code>Lista</code> <span className="texto-secundario">datos=&#123;equipo&#125;</span>
                <ul>
                  <li>
                    <code>Tarjeta</code> <span className="texto-secundario">Ana</span>
                  </li>
                  <li>
                    <code>Tarjeta</code> <span className="texto-secundario">Luis</span>
                  </li>
                  <li>
                    <code>Tarjeta</code> <span className="texto-secundario">Sara</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DemoComposicion;
