// Envoltura del laboratorio: las dos formas de inicializar, lado a lado.
import "../comparacion.css";
import LecturaDirecta from "./LecturaDirecta";
import LecturaPerezosa from "./LecturaPerezosa";

function DemoPerezosa() {
  return (
    <div className="t6-par">
      <div className="tarjeta t6-lado t6-lado-mal">
        <h3>❌ useState(leerNotas())</h3>
        <LecturaDirecta />
      </div>
      <div className="tarjeta t6-lado t6-lado-bien">
        <h3>✅ useState(() =&gt; leerNotas())</h3>
        <LecturaPerezosa />
      </div>
    </div>
  );
}

export default DemoPerezosa;
