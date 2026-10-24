// 5000 tareas de ejemplo, generadas una sola vez al cargar el módulo.
const TEMAS = ["repasar hooks", "practicar usememo", "revisar taskflow", "leer la documentacion"];

const TAREAS = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  titulo: `tarea ${i + 1}: ${TEMAS[i % TEMAS.length]}`,
}));

export default TAREAS;
