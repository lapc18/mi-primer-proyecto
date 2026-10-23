import { log } from "../../../lab/devlog"; // lab

function FilaEstudiante({ nombre, curso }) {
  log("render", `FilaEstudiante: ${nombre}`); // lab
  return (
    <li className="lista-item">
      <strong>{nombre}</strong>
      <span className="pill">{curso}</span>
    </li>
  );
}

export default FilaEstudiante;
