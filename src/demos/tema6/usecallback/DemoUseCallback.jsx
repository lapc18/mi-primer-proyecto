// Envoltura del laboratorio: las dos listas usan la misma TarjetaTarea con memo.
import "../comparacion.css";
import ListaSinCallback from "./ListaSinCallback";
import ListaConCallback from "./ListaConCallback";

function DemoUseCallback() {
  return (
    <div className="t6-par">
      <div className="tarjeta t6-lado t6-lado-mal">
        <h3>❌ Sin useCallback</h3>
        <ListaSinCallback />
      </div>
      <div className="tarjeta t6-lado t6-lado-bien">
        <h3>✅ Con useCallback</h3>
        <ListaConCallback />
      </div>
    </div>
  );
}

export default DemoUseCallback;
