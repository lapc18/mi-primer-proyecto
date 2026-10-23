import { log } from "../../../lab/devlog"; // lab

function ListaTareas({ tareas }) {
  log("render", "ListaTareas", { visibles: tareas.length }); // lab

  if (tareas.length === 0) {
    return <p className="texto-secundario">Sin resultados.</p>;
  }

  return (
    <ul className="lista">
      {tareas.map((t) => (
        <li key={t.id} className="lista-item">
          {t.titulo}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
