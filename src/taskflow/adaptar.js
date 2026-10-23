// Convierte las tareas de la API al formato de TaskFlow.
function adaptar(lista) {
  return lista.map((todo) => ({
    id: todo.id,
    titulo: todo.title,
    estado: todo.completed ? "Completada" : "Pendiente",
  }));
}

export default adaptar;
