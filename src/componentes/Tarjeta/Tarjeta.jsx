import './Tarjeta.css';

function Tarjeta({nombre, rol, emoji = "💁🏽"}){

    return <p>
        {emoji} <br />
        Nombre: {nombre} <br />
        Rol: {rol}
    </p>
}

export default Tarjeta;