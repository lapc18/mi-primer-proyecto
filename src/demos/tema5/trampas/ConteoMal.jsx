// ❌ Si la lista está vacía, length es 0 y React dibuja ese 0
function ConteoMal({ tareas }) {
  return (
    <div className="trampa-salida">
      {tareas.length && (
        <ul className="lista">
          {tareas.map((t) => (
            <li key={t.id} className="lista-item">
              {t.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ConteoMal;
