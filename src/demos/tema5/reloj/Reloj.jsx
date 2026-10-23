import { useEffect, useState } from "react";
import "./Reloj.css";
import { log } from "../../../lab/devlog"; // lab

function Reloj() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);
    log("effect", "Reloj montado: setInterval", { id }); // lab

    return () => {
      clearInterval(id);
      log("cleanup", "Reloj desmontado: clearInterval", { id }); // lab
    };
  }, []);

  return <p className="reloj">⏱ {segundos} s</p>;
}

export default Reloj;
