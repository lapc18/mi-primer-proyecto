// ✅ La comparación > 0 da true o false, y false no se dibuja
function ConteoBien({ tareas }) {
  return (
    <div className="trampa-salida">
      {tareas.length > 0 && (
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

export default ConteoBien;
