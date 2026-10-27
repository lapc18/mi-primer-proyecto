// Envoltura del laboratorio: la misma app de 3 vistas, sin router y con router.
import "../../tema6/comparacion.css";
import "../../../taskflow7/components/Navbar.css";
import "../tema7.css";
import AppSinRouter from "./AppSinRouter";
import AppConRouter from "./AppConRouter";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";

function DemoSinRouter() {
  return (
    <div className="t6-par">
      <div className="tarjeta t6-lado t6-lado-mal">
        <h3>❌ useState + if</h3>
        <NavegadorSimulado>
          <AppSinRouter />
        </NavegadorSimulado>
      </div>
      <div className="tarjeta t6-lado t6-lado-bien">
        <h3>✅ React Router</h3>
        <NavegadorSimulado>
          <AppConRouter />
        </NavegadorSimulado>
      </div>
    </div>
  );
}

export default DemoSinRouter;
