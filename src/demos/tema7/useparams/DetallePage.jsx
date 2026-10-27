import { useParams } from "react-router";
import { log } from "../../../lab/devlog"; // lab

function DetallePage() {
  const { id } = useParams();
  log("render", "DetallePage: useParams()", { id }); // lab
  return <h1>Tarea #{id}</h1>;
}

export default DetallePage;
