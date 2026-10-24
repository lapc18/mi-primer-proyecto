import { log } from "../../../lab/devlog"; // lab

function FiltroDerivado({ tareas, busqueda }) {
  const filtradas = tareas.filter((t) =>
    t.titulo.includes(busqueda)
  );
  log("calculo", "✅ filter() en el render"); // lab
  log("render", "✅ FiltroDerivado", { filtradas: filtradas.length }); // lab

  return (
    <ul className="lista">
      {filtradas.map((t) => (
        <li key={t.id} className="lista-item">
          {t.titulo}
        </li>
      ))}
    </ul>
  );
}

export default FiltroDerivado;
