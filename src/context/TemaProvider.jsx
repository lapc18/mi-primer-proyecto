import { TemaContext } from "./TemaContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { log } from "../lab/devlog"; // lab

function TemaProvider({ children }) {
  const [tema, setTema] = useLocalStorage("tf-tema", "claro");
  const alternar = () =>
    setTema((t) => (t === "claro" ? "oscuro" : "claro"));
  log("render", "TemaProvider", { tema }); // lab

  return (
    <TemaContext value={{ tema, alternar }}>
      {children}
    </TemaContext>
  );
}

export default TemaProvider;
