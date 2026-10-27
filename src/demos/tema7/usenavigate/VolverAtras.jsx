import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router"; // lab
import { log } from "../../../lab/devlog"; // lab

function VolverAtras() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // lab

  // navigate(-1) es el botón atrás
  const volver = () => {
    if (location.key === "default") log("ruta", "navigate(-1) sin historial: En el navegador real esto te sacaría de la app"); // lab
    navigate(-1);
  };

  return (
    <article>
      <h2>Tarea #{id}</h2>
      <button onClick={volver}>← Volver</button>
    </article>
  );
}

export default VolverAtras;
