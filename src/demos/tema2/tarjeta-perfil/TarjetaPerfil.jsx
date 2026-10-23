import "./TarjetaPerfil.css";
import { log } from "../../../lab/devlog"; // lab

function TarjetaPerfil() {
  log("render", "TarjetaPerfil (siempre muestra lo mismo)"); // lab
  return (
    <article className="tarjeta perfil">
      <div className="perfil-avatar">AG</div>
      <h2>Ana García</h2>
      <p className="texto-secundario">Desarrolladora Frontend</p>
      <button className="boton boton-primario">Ver perfil</button>
    </article>
  );
}

export default TarjetaPerfil;
