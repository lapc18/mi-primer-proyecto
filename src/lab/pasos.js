// Catálogo del laboratorio: un paso por slide.
// `slide` es el número de diapositiva dentro del tema; ajústalo si tu deck
// usa otra numeración. `fuente` son rutas relativas a src/ que muestra el visor.

import Saludo from "../demos/tema1/saludo/App";
import MiComponente from "../demos/tema2/mi-componente/MiComponente";
import TarjetaPerfil from "../demos/tema2/tarjeta-perfil/TarjetaPerfil";
import Tarjetas from "../demos/tema2/tarjetas/App";
import ListaDinamica from "../demos/tema2/lista-dinamica/App";
import Botones from "../demos/tema2/boton/App";
import DemoComposicion from "../demos/tema2/composicion/DemoComposicion";
import Contador from "../demos/tema3/contador/Contador";
import PanelInfo from "../demos/tema3/panel-info/PanelInfo";
import Eventos from "../demos/tema3/eventos/Eventos";
import FormularioControlado from "../demos/tema3/formulario/FormularioControlado";
import TodoApp from "../demos/tema3/todo-app/TodoApp";
import Padre from "../demos/tema4/flujo/Padre";
import Lifting from "../demos/tema4/lifting/App";
import Hermanos from "../demos/tema4/hermanos/App";
import TaskFlowCentral from "../demos/tema4/taskflow/App";
import Efectos from "../demos/tema5/tres-efectos/Efectos";
import Reloj from "../demos/tema5/reloj/App";
import DemoAsync from "../demos/tema5/async/DemoAsync";
import DemoUsuarios from "../demos/tema5/usuarios/DemoUsuarios";
import DemoCondicional from "../demos/tema5/condicional/DemoCondicional";
import DemoTrampas from "../demos/tema5/trampas/DemoTrampas";
import DemoTaskFlow from "../demos/tema5/taskflow-api/DemoTaskFlow";
import DemoTareasUsuario from "../demos/tema5/tareas-usuario/DemoTareasUsuario";
import DemoLoop from "../demos/tema6/retro/DemoLoop";
import DemoResOk from "../demos/tema6/retro/DemoResOk";
import DemoFiltros from "../demos/tema6/retro/DemoFiltros";
import DemoUseFetch from "../demos/tema6/usefetch/DemoUseFetch";
import DemoCancelado from "../demos/tema6/cancelado/DemoCancelado";
import DemoLocalStorage from "../demos/tema6/localstorage/DemoLocalStorage";
import DemoPerezosa from "../demos/tema6/localstorage/DemoPerezosa";
import DemoUseMemo from "../demos/tema6/usememo/DemoUseMemo";
import DemoMemo from "../demos/tema6/memo/DemoMemo";
import DemoUseCallback from "../demos/tema6/usecallback/DemoUseCallback";
import DemoDebounce from "../demos/tema6/debounce/DemoDebounce";
import DemoTaskFlow6 from "../demos/tema6/taskflow/DemoTaskFlow6";

export const TEMAS = {
  1: "Introducción a React",
  2: "Componentes y Props",
  3: "Estado y Eventos",
  4: "Comunicación entre componentes",
  5: "Hooks y Ciclo de Vida",
  6: "Hooks Avanzados",
};

const PASOS = [
  // ---------- Tema 1 ----------
  {
    id: "1.1",
    tema: 1,
    slide: 1,
    titulo: "JSX: mi primer componente",
    observar:
      "Fragmento <>…</> como raíz, className en vez de class, {nombre} y {2 + 3} se evalúan, y <img /> se cierra sola. Con StrictMode el render aparece dos veces en el log.",
    Componente: Saludo,
    fuente: ["demos/tema1/saludo/Saludo.jsx", "demos/tema1/saludo/App.jsx"],
  },

  // ---------- Tema 2 ----------
  {
    id: "2.1",
    tema: 2,
    slide: 1,
    titulo: "Anatomía de un componente",
    observar:
      "Los 4 comentarios numerados: mayúscula, lógica antes del return, una sola raíz y export default.",
    Componente: MiComponente,
    fuente: ["demos/tema2/mi-componente/MiComponente.jsx"],
  },
  {
    id: "2.2",
    tema: 2,
    slide: 2,
    titulo: "Un componente estático",
    observar:
      "Todo está escrito a mano: si quiero otra persona tengo que copiar el componente. Ese es el problema que resuelven las props.",
    Componente: TarjetaPerfil,
    fuente: ["demos/tema2/tarjeta-perfil/TarjetaPerfil.jsx"],
  },
  {
    id: "2.3",
    tema: 2,
    slide: 3,
    titulo: "Props: un componente, tres tarjetas",
    observar:
      "La misma Tarjeta se usa 3 veces con props distintas. En el log, cada render muestra las props que recibe.",
    Componente: Tarjetas,
    fuente: ["demos/tema2/tarjetas/Tarjeta.jsx", "demos/tema2/tarjetas/App.jsx"],
  },
  {
    id: "2.4",
    tema: 2,
    slide: 4,
    titulo: "Listas dinámicas con .map()",
    observar:
      "El array vive en App y baja por props a Lista. Cada FilaEstudiante lleva key={e.id}, nunca el índice.",
    Componente: ListaDinamica,
    fuente: [
      "demos/tema2/lista-dinamica/App.jsx",
      "demos/tema2/lista-dinamica/Lista.jsx",
      "demos/tema2/lista-dinamica/FilaEstudiante.jsx",
    ],
  },
  {
    id: "2.5",
    tema: 2,
    slide: 5,
    titulo: "Props por defecto y style",
    observar:
      "“Guardar” usa el color por defecto #61DAFB. “Sin onClick” no se rompe porque onClick vale () => {} por defecto. Haz clic y mira el log.",
    Componente: Botones,
    fuente: ["demos/tema2/boton/Boton.jsx", "demos/tema2/boton/App.jsx"],
  },
  {
    id: "2.6",
    tema: 2,
    slide: 6,
    titulo: "Composición de componentes",
    observar:
      "El árbol de la derecha coincide con el orden de los renders en el log: primero App, luego Header y Lista, y al final cada Tarjeta.",
    Componente: DemoComposicion,
    fuente: [
      "demos/tema2/composicion/App.jsx",
      "demos/tema2/composicion/Header.jsx",
      "demos/tema2/composicion/Lista.jsx",
      "demos/tema2/tarjetas/Tarjeta.jsx",
    ],
  },

  // ---------- Tema 3 ----------
  {
    id: "3.1",
    tema: 3,
    slide: 1,
    titulo: "useState: el contador",
    observar:
      "Cada clic registra el cambio de state y después un render nuevo con la cuenta actualizada. Con StrictMode cada render sale dos veces; apágalo para comparar.",
    Componente: Contador,
    fuente: ["demos/tema3/contador/Contador.jsx"],
  },
  {
    id: "3.2",
    tema: 3,
    slide: 2,
    titulo: "State booleano: mostrar y ocultar",
    observar:
      "!prev invierte el booleano y {visible && …} decide si el párrafo existe. Inspecciona el DOM: cuando está oculto, no hay párrafo.",
    Componente: PanelInfo,
    fuente: ["demos/tema3/panel-info/PanelInfo.jsx"],
  },
  {
    id: "3.3",
    tema: 3,
    slide: 3,
    titulo: "Eventos en React",
    observar:
      "Cada evento queda en el log. onChange da e.target.value, onSubmit con preventDefault no recarga la página y onKeyDown detecta e.key === \"Enter\".",
    Componente: Eventos,
    fuente: ["demos/tema3/eventos/Eventos.jsx"],
  },
  {
    id: "3.4",
    tema: 3,
    slide: 4,
    titulo: "Formulario controlado",
    observar:
      "Cada tecla pasa por el state (value + onChange). La vista previa se actualiza sola. Al enviar, el objeto { nombre, email } aparece en el log y en la consola.",
    Componente: FormularioControlado,
    fuente: ["demos/tema3/formulario/FormularioControlado.jsx"],
  },
  {
    id: "3.5",
    tema: 3,
    slide: 5,
    titulo: "Todo App: agregar y eliminar",
    observar:
      "Agregar crea { id: Date.now(), texto } con [...prev, nueva]. Eliminar usa .filter() por id. El state nunca se muta. Mira el id en el log.",
    Componente: TodoApp,
    fuente: ["demos/tema3/todo-app/TodoApp.jsx"],
  },

  // ---------- Tema 4 ----------
  {
    id: "4.1",
    tema: 4,
    slide: 1,
    titulo: "Flujo unidireccional",
    observar:
      "Sigue las flechas del log: el clic en el Hijo hace subir el evento (onAgregar), el Padre cambia su state y los datos vuelven a bajar como props (titulo).",
    Componente: Padre,
    fuente: ["demos/tema4/flujo/Padre.jsx", "demos/tema4/flujo/Hijo.jsx"],
  },
  {
    id: "4.2",
    tema: 4,
    slide: 2,
    titulo: "Lifting state up",
    observar:
      "El Buscador no tiene state propio: App es la única fuente de verdad. Cada tecla sube con onBuscar y baja de nuevo como valor.",
    Componente: Lifting,
    fuente: ["demos/tema4/lifting/App.jsx", "demos/tema4/lifting/Buscador.jsx"],
  },
  {
    id: "4.3",
    tema: 4,
    slide: 3,
    titulo: "Componentes hermanos",
    observar:
      "Buscador y ListaTareas no se conocen: los une el state busqueda de App. El botón ✕ llama a onBuscar(\"\") y el input se limpia porque es controlado.",
    Componente: Hermanos,
    fuente: [
      "demos/tema4/hermanos/App.jsx",
      "demos/tema4/hermanos/Buscador.jsx",
      "demos/tema4/hermanos/ListaTareas.jsx",
    ],
  },
  {
    id: "4.4",
    tema: 4,
    slide: 4,
    titulo: "TaskFlow con estado central",
    observar:
      "App guarda tareas y busqueda. tareasFiltradas y pendientes se calculan en el render: no son state ni usan useEffect. Agrega una tarea y mira cómo cambian los contadores.",
    Componente: TaskFlowCentral,
    fuente: [
      "demos/tema4/taskflow/App.jsx",
      "taskflow/Encabezado.jsx",
      "taskflow/FormularioTarea.jsx",
      "taskflow/Buscador.jsx",
      "taskflow/ListaTareas.jsx",
      "taskflow/TarjetaTarea.jsx",
    ],
  },

  // ---------- Tema 5 ----------
  {
    id: "5.1",
    tema: 5,
    slide: 1,
    titulo: "Los 3 casos de useEffect",
    observar:
      "“Forzar render” solo dispara el efecto sin array. “Cambiar usuario” dispara también [usuario]. El efecto [] solo aparece al montar (dos veces con StrictMode).",
    Componente: Efectos,
    fuente: ["demos/tema5/tres-efectos/Efectos.jsx"],
  },
  {
    id: "5.2",
    tema: 5,
    slide: 2,
    titulo: "Cleanup: el reloj",
    observar:
      "Al desmontar aparece el cleanup con clearInterval. Con StrictMode verás montar, limpiar y volver a montar al entrar: así React comprueba que el cleanup funciona.",
    Componente: Reloj,
    fuente: ["demos/tema5/reloj/Reloj.jsx", "demos/tema5/reloj/App.jsx"],
  },
  {
    id: "5.3",
    tema: 5,
    slide: 3,
    titulo: "Async dentro del efecto",
    observar:
      "La función async se define dentro del efecto y se llama al final. Con StrictMode activo el efecto y el GET aparecen dos veces; apágalo y aparece una sola vez.",
    Componente: DemoAsync,
    fuente: ["demos/tema5/async/UsuarioDestacado.jsx"],
  },
  {
    id: "5.4",
    tema: 5,
    slide: 4,
    titulo: "Fetch: los 3 estados",
    observar:
      "Prueba los 4 modos. Con 404 el servidor sí responde, pero res.ok es false y el throw nos lleva al catch. Sin red, fetch falla solo. En todos los casos el finally apaga cargando.",
    Componente: DemoUsuarios,
    fuente: ["demos/tema5/usuarios/Usuarios.jsx"],
  },
  {
    id: "5.5",
    tema: 5,
    slide: 5,
    titulo: "Renderizado condicional: 4 técnicas",
    observar:
      "Cambia el estado y compara: el ternario solo cubre dos caminos, && muestra o no muestra, el early return sale antes y la variable JSX arma el contenido antes del return.",
    Componente: DemoCondicional,
    fuente: [
      "demos/tema5/condicional/Ternario.jsx",
      "demos/tema5/condicional/ConAnd.jsx",
      "demos/tema5/condicional/EarlyReturn.jsx",
      "demos/tema5/condicional/VariableJsx.jsx",
    ],
  },
  {
    id: "5.6",
    tema: 5,
    slide: 6,
    titulo: "Trampas del renderizado condicional",
    observar:
      "Con la lista vacía, el lado ❌ dibuja un 0 en rojo y el ✅ no dibuja nada. Abajo, los dos lados muestran lo mismo, pero el early return se lee mucho mejor.",
    Componente: DemoTrampas,
    fuente: [
      "demos/tema5/trampas/ConteoMal.jsx",
      "demos/tema5/trampas/ConteoBien.jsx",
      "demos/tema5/trampas/TernariosAnidados.jsx",
      "demos/tema5/trampas/ConEarlyReturn.jsx",
    ],
  },
  {
    id: "5.7",
    tema: 5,
    slide: 7,
    titulo: "TaskFlow + API",
    observar:
      "adaptar() convierte title → titulo y completed → estado. Mira la pestaña del navegador: document.title muestra las pendientes y cambia al agregar una tarea. El filtro sigue siendo derivado, no está en un efecto.",
    Componente: DemoTaskFlow,
    fuente: [
      "taskflow/App.jsx",
      "taskflow/adaptar.js",
      "taskflow/Encabezado.jsx",
      "taskflow/ListaTareas.jsx",
      "taskflow/TarjetaTarea.jsx",
    ],
  },
  {
    id: "5.8",
    tema: 5,
    slide: 8,
    titulo: "[dep] bien usado: tareas por usuario",
    observar:
      "Cada cambio de usuario ejecuta el cleanup del efecto anterior (ignorar = true) antes de pedir de nuevo. Activa “Demora aleatoria” y cambia rápido: las respuestas viejas llegan tarde, quedan “ignoradas” en el log y nunca pisan la lista del usuario actual. Esa es la condición de carrera que evita el flag.",
    Componente: DemoTareasUsuario,
    fuente: [
      "demos/tema5/tareas-usuario/TareasDeUsuario.jsx",
      "demos/tema5/tareas-usuario/Resultado.jsx",
    ],
  },
  // ---------- Tema 6 ----------
  {
    id: "6.1",
    tema: 6,
    slide: 4,
    titulo: "Retro · Loop infinito en useEffect",
    observar:
      "Sin array, cada setTareas provoca un render y el efecto vuelve a correr: mira los GET repetidos en el log. El laboratorio lo frena a las 6 vueltas. Cambia a “Con []” y verás un solo GET (dos con StrictMode).",
    Componente: DemoLoop,
    fuente: ["demos/tema6/retro/LoopInfinito.jsx", "demos/tema6/retro/CargaUnaVez.jsx"],
  },
  {
    id: "6.2",
    tema: 6,
    slide: 4,
    titulo: "Retro · Revisar res.ok",
    observar:
      "Elige “Error 404”. El servidor responde {} y la versión sin res.ok lo guarda como si fueran tareas: tareas.map falla con un error que no menciona el fetch (la consola lo muestra a propósito). La versión con res.ok lanza el error y muestra un mensaje claro.",
    Componente: DemoResOk,
    fuente: ["demos/tema6/retro/SinResOk.jsx", "demos/tema6/retro/ConResOk.jsx"],
  },
  {
    id: "6.3",
    tema: 6,
    slide: 5,
    titulo: "Retro · Calcula, no sincronices",
    observar:
      "Escribe una letra y cuenta en el log: la versión con efecto renderiza dos veces (la segunda por setFiltradas) y la derivada, una. Además, la del efecto arranca vacía y se llena después del primer render.",
    Componente: DemoFiltros,
    fuente: ["demos/tema6/retro/FiltroConEfecto.jsx", "demos/tema6/retro/FiltroDerivado.jsx"],
  },
  {
    id: "6.4",
    tema: 6,
    slide: 8,
    titulo: "useFetch: un hook, dos componentes",
    observar:
      "ListaUsuarios y ListaTareas usan el mismo useFetch con URL distinta: cada uno tiene sus propios 3 estados. Prueba los 4 modos; toda la lógica del Tema 5 quedó dentro del hook. Con StrictMode verás una “respuesta ignorada” por lista: es la del montaje de prueba, que el cleanup canceló.",
    Componente: DemoUseFetch,
    fuente: [
      "hooks/useFetch.js",
      "demos/tema6/usefetch/ListaUsuarios.jsx",
      "demos/tema6/usefetch/ListaTareas.jsx",
    ],
  },
  {
    id: "6.5",
    tema: 6,
    slide: 9,
    titulo: "useFetch: cancelado",
    observar:
      "Activa “Demora aleatoria” y cambia rápido de usuario. key={usuarioId} monta un TareasDeUsuario nuevo; el anterior se desmonta, su cleanup pone cancelado = true y, si su respuesta llega tarde, el log la marca como ignorada. Es el mismo patrón que ignorar en el 5.8.",
    Componente: DemoCancelado,
    fuente: [
      "hooks/useFetch.js",
      "demos/tema6/cancelado/TareasDeUsuario.jsx",
      "demos/tema6/cancelado/PanelUsuarios.jsx",
    ],
  },
  {
    id: "6.6",
    tema: 6,
    slide: 11,
    titulo: "useLocalStorage: estado que persiste",
    observar:
      "Agrega notas y pulsa “Simular recarga” (o F5): siguen ahí. El getItem aparece solo al montar (dos veces con StrictMode) y cada cambio registra un setItem. “Ver lo guardado” muestra el texto JSON que guarda el navegador.",
    Componente: DemoLocalStorage,
    fuente: ["hooks/useLocalStorage.js", "demos/tema6/localstorage/Notas.jsx"],
  },
  {
    id: "6.7",
    tema: 6,
    slide: 11,
    titulo: "Inicialización perezosa",
    observar:
      "Pulsa “Re-render” en cada lado. Con useState(leerNotas()) el log muestra una lectura de localStorage en cada render; con useState(() => leerNotas()) solo se lee al montar.",
    Componente: DemoPerezosa,
    fuente: [
      "demos/tema6/localstorage/LecturaDirecta.jsx",
      "demos/tema6/localstorage/LecturaPerezosa.jsx",
      "demos/tema6/localstorage/leerNotas.js",
    ],
  },
  {
    id: "6.8",
    tema: 6,
    slide: 13,
    titulo: "useMemo: memoriza el resultado",
    observar:
      "Escribe y los dos lados filtran las 5000 tareas. Ahora pulsa “Re-render sin cambios”: sin useMemo vuelve a filtrar; con useMemo no aparece ningún calculo, porque tareas y busqueda no cambiaron.",
    Componente: DemoUseMemo,
    fuente: ["demos/tema6/usememo/FiltroSinMemo.jsx", "demos/tema6/usememo/FiltroConMemo.jsx"],
  },
  {
    id: "6.9",
    tema: 6,
    slide: 14,
    titulo: "React.memo: evita renders innecesarios",
    observar:
      "Pulsa el contador del padre: las 3 tarjetas sin memo se renderizan otra vez y las de memo no. El padre ya pasa un eliminar estable; por qué hace falta se ve en el 6.10. También verás los console.log en la consola.",
    Componente: DemoMemo,
    fuente: ["demos/tema6/memo/TarjetaTarea.jsx", "demos/tema6/memo/TarjetaSinMemo.jsx"],
  },
  {
    id: "6.10",
    tema: 6,
    slide: 15,
    titulo: "useCallback: la misma función en cada render",
    observar:
      "Las dos listas usan la misma TarjetaTarea con memo. Pulsa cada contador: sin useCallback se renderizan las 3 tarjetas, porque eliminar es una función nueva; con useCallback, ninguna.",
    Componente: DemoUseCallback,
    fuente: [
      "demos/tema6/usecallback/ListaSinCallback.jsx",
      "demos/tema6/usecallback/ListaConCallback.jsx",
      "demos/tema6/memo/TarjetaTarea.jsx",
    ],
  },
  {
    id: "6.11",
    tema: 6,
    slide: 16,
    titulo: "useDebounce: espera a que termine de escribir",
    observar:
      "Escribe rápido: cada tecla inicia un timer y el cleanup cancela el anterior. Solo cuando dejas de escribir durante el delay aparece un setDebounced. Cambia a 800 ms para verlo más claro.",
    Componente: DemoDebounce,
    fuente: ["hooks/useDebounce.js", "demos/tema6/debounce/BuscadorDebounce.jsx"],
  },
  {
    id: "6.12",
    tema: 6,
    slide: 17,
    titulo: "TaskFlow con custom hooks",
    observar:
      "Borra las tareas guardadas y carga los ejemplos con el botón. Recarga: siguen ahí. Al escribir en el buscador, el filtro corre 400 ms después y las tarjetas que no cambian no se renderizan (memo + useCallback).",
    Componente: DemoTaskFlow6,
    fuente: [
      "taskflow6/App.jsx",
      "taskflow6/ListaTareas.jsx",
      "taskflow6/TarjetaTarea.jsx",
      "hooks/useLocalStorage.js",
      "hooks/useDebounce.js",
      "hooks/useFetch.js",
    ],
  },
];

export default PASOS;
