// Envoltura del laboratorio: la misma cadena App → Layout → Sidebar → Perfil, con props y con Context.
import "../../tema6/comparacion.css";
import AppConProps from "./AppConProps";
import AppConContext from "./AppConContext";

function DemoPropDrilling() {
  return (
    <div className="t6-par">
      <div className="tarjeta t6-lado t6-lado-mal">
        <h3>❌ Prop drilling</h3>
        <AppConProps />
      </div>
      <div className="tarjeta t6-lado t6-lado-bien">
        <h3>✅ Context</h3>
        <AppConContext />
      </div>
    </div>
  );
}

export default DemoPropDrilling;
