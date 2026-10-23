import { useState } from "react";

// Todas las fuentes de las demos y de TaskFlow como texto (?raw).
const FUENTES = import.meta.glob(
  ["../demos/**/*.{js,jsx}", "../taskflow/**/*.{js,jsx}"],
  { query: "?raw", import: "default", eager: true },
);

const CLAVES = new Set([
  "import", "from", "export", "default", "function", "return", "const", "let",
  "var", "if", "else", "async", "await", "try", "catch", "finally", "throw",
  "new", "true", "false", "null", "undefined", "for", "of", "in", "while",
  "typeof", "class", "extends",
]);

// Grupos: 1 comentario, 2 string, 3 etiqueta JSX, 4 atributo, 5 identificador, 6 número.
const PATRON =
  /(\/\/.*$|\/\*.*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[A-Za-z][\w.]*|<\/?>|\/>)|([A-Za-z_$][\w$-]*(?==[{"]))|([A-Za-z_$][\w$]*)|(\b\d+(?:\.\d+)?\b)/g;

// Quita las líneas que existen solo para el laboratorio:
// las que terminan en `// lab` o `{/* lab */}`, y los bloques entre
// `// lab:inicio` y `// lab:fin`.
function limpiarFuente(codigo) {
  const salida = [];
  let enBloque = false;
  for (const linea of codigo.replace(/\r/g, "").split("\n")) {
    const recortada = linea.trimEnd();
    if (recortada.endsWith("// lab:inicio")) {
      enBloque = true;
      continue;
    }
    if (recortada.endsWith("// lab:fin")) {
      enBloque = false;
      continue;
    }
    if (enBloque || recortada.endsWith("// lab") || recortada.endsWith("{/* lab */}")) {
      continue;
    }
    const anteriorVacia = salida.length > 0 && salida[salida.length - 1].trim() === "";
    if (recortada.trim() === "" && (salida.length === 0 || anteriorVacia)) continue;
    salida.push(recortada);
  }
  while (salida.length > 0 && salida[salida.length - 1].trim() === "") salida.pop();
  return salida;
}

function claseDe(m, linea) {
  const [texto, comentario, cadena, etiqueta, atributo, palabra, numero] = m;
  if (comentario) return "tk-comentario";
  if (cadena) return "tk-cadena";
  if (etiqueta) return "tk-etiqueta";
  if (atributo) return "tk-atributo";
  if (numero) return "tk-numero";
  if (palabra) {
    if (CLAVES.has(palabra)) return "tk-clave";
    if (linea[m.index + texto.length] === "(") return "tk-funcion";
  }
  return null;
}

function resaltar(linea) {
  const partes = [];
  let ultimo = 0;
  for (const m of linea.matchAll(PATRON)) {
    if (m.index > ultimo) partes.push(linea.slice(ultimo, m.index));
    const clase = claseDe(m, linea);
    partes.push(
      clase ? (
        <span key={m.index} className={clase}>
          {m[0]}
        </span>
      ) : (
        m[0]
      ),
    );
    ultimo = m.index + m[0].length;
  }
  if (ultimo < linea.length) partes.push(linea.slice(ultimo));
  return partes;
}

function nombreArchivo(ruta) {
  return ruta.split("/").pop();
}

function VisorCodigo({ archivos }) {
  const [activo, setActivo] = useState(0);
  const [marcadas, setMarcadas] = useState([]);

  const ruta = archivos[activo];
  const fuente = FUENTES[`../${ruta}`] ?? `// No se encontró src/${ruta}`;
  const lineas = limpiarFuente(fuente);

  const elegirArchivo = (indice) => {
    setActivo(indice);
    setMarcadas([]);
  };

  const alternarLinea = (numero) => {
    setMarcadas((prev) =>
      prev.includes(numero) ? prev.filter((n) => n !== numero) : [...prev, numero],
    );
  };

  return (
    <section className="visor" aria-label="Código fuente">
      <div className="visor-barra" role="tablist" aria-label="Archivos">
        {archivos.map((r, indice) => (
          <button
            key={r}
            type="button"
            role="tab"
            aria-selected={indice === activo}
            className="visor-pestana"
            title={`src/${r}`}
            onClick={() => elegirArchivo(indice)}
          >
            {nombreArchivo(r)}
          </button>
        ))}
      </div>
      <p className="visor-ruta">src/{ruta}</p>
      <pre className="visor-codigo">
        <code>
          {lineas.map((linea, indice) => (
            <span
              key={indice}
              className={
                marcadas.includes(indice) ? "visor-linea visor-linea-marcada" : "visor-linea"
              }
              onClick={() => alternarLinea(indice)}
            >
              <span className="visor-numero">{indice + 1}</span>
              <span className="visor-texto">{linea === "" ? " " : resaltar(linea)}</span>
            </span>
          ))}
        </code>
      </pre>
    </section>
  );
}

export default VisorCodigo;
