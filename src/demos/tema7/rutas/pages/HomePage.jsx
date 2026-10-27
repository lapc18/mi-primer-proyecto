import { log } from "../../../../lab/devlog"; // lab

function HomePage() {
  log("render", 'Routes eligió path="/" → HomePage'); // lab
  return (
    <section className="t7-pagina">
      <h2>Inicio</h2>
      <p>Prueba las rutas con los atajos o escribe una en la barra.</p>
    </section>
  );
}

export default HomePage;
