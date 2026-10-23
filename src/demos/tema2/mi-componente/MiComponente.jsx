import { log } from "../../../lab/devlog"; // lab

// 1. El nombre empieza con mayúscula
function MiComponente() {
  // 2. La lógica va antes del return
  const curso = "React";
  const temas = 5;
  log("render", "MiComponente", { curso, temas }); // lab

  // 3. Una sola raíz
  return (
    <div className="tarjeta">
      <h2>Curso de {curso}</h2>
      <p className="texto-secundario">{temas} temas</p>
    </div>
  );
}

// 4. Lo exportamos para usarlo en otro archivo
export default MiComponente;
