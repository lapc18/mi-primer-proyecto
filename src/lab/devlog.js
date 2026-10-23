// Registro de eventos del laboratorio.
// Las demos llaman a log(tipo, mensaje, datos?) y el PanelLogs se suscribe
// con useSyncExternalStore.

const MAXIMO = 200;
const oyentes = new Set();

let entradas = [];
let publicadas = entradas;
let avisoPendiente = false;
let siguienteId = 1;

function formatearHora(fecha) {
  const mm = String(fecha.getMinutes()).padStart(2, "0");
  const ss = String(fecha.getSeconds()).padStart(2, "0");
  const ms = String(fecha.getMilliseconds()).padStart(3, "0");
  return `${mm}:${ss}.${ms}`;
}

function formatearDatos(datos) {
  if (datos === undefined) return "";
  if (datos instanceof Error) return datos.message;
  try {
    return JSON.stringify(datos);
  } catch {
    return String(datos);
  }
}

// Se avisa en un microtask: así una demo puede registrar durante su render
// sin que el panel se actualice en medio del render de otro componente.
function avisar() {
  if (avisoPendiente) return;
  avisoPendiente = true;
  queueMicrotask(() => {
    avisoPendiente = false;
    publicadas = entradas;
    oyentes.forEach((oyente) => oyente());
  });
}

export function log(tipo, mensaje, datos) {
  const entrada = {
    id: siguienteId++,
    hora: formatearHora(new Date()),
    tipo,
    mensaje,
    datos: formatearDatos(datos),
  };
  entradas = [...entradas, entrada].slice(-MAXIMO);
  avisar();
}

export function limpiar() {
  entradas = [];
  avisar();
}

// Id que tendrá la próxima entrada.
export function marca() {
  return siguienteId;
}

// Quita los cleanup registrados desde `id`: son los de la demo que se acaba
// de desmontar al cambiar de paso.
export function descartarCleanupsDesde(id) {
  entradas = entradas.filter((e) => e.id < id || e.tipo !== "cleanup");
  avisar();
}

export function subscribe(oyente) {
  oyentes.add(oyente);
  return () => oyentes.delete(oyente);
}

export function getSnapshot() {
  return publicadas;
}
