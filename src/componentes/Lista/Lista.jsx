import Tarjeta from "../Tarjeta/Tarjeta";

export default function Lista({ lista = [] }) {
  return (
    <section className="lista">
      {lista.map((e, index) => (
        <Tarjeta key={index} nombre={e.nombre} rol={e.rol} />
      ))}
    </section>
  );
}
