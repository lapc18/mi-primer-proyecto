import "./Boton.css";

function Boton({ texto, color = "#61DAFB", onClick = () => {} }) {
  return (
    <button className="boton-color" style={{ background: color }} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
