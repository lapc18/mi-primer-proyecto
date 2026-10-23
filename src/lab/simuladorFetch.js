// Intercepta fetch hacia jsonplaceholder para registrar cada petición en el
// panel y simular demora, error 404 o falta de red sin tocar el código de la
// demo. Las peticiones a otros dominios pasan sin cambios.

import { log } from "./devlog";

const DOMINIO = "jsonplaceholder.typicode.com";

// Con HMR este módulo se puede evaluar más de una vez: guardamos el fetch
// original una sola vez para no envolverlo dos veces.
const fetchOriginal = window.__fetchOriginal ?? window.fetch.bind(window);
window.__fetchOriginal = fetchOriginal;

let modo = "exito";

export function setModoFetch(nuevoModo) {
  modo = nuevoModo;
}

function esperar(ms) {
  return new Promise((resolver) => setTimeout(resolver, ms));
}

function leerUrl(recurso) {
  if (typeof recurso === "string") return recurso;
  if (recurso instanceof URL) return recurso.href;
  return recurso.url;
}

function calcularEspera() {
  if (modo === "demora") return 2000;
  if (modo === "carrera") return 300 + Math.round(Math.random() * 2200);
  return 0;
}

window.fetch = async function fetchLab(recurso, opciones) {
  const original = leerUrl(recurso);
  if (!original.includes(DOMINIO)) return fetchOriginal(recurso, opciones);

  let url = original;
  if (modo === "error404") url = url.replace(DOMINIO, `${DOMINIO}/no-existe`);
  if (modo === "sinRed") url = url.replace(DOMINIO, "api.talendig-no-existe.invalid");

  log("fetch", `GET ${url}`);

  const espera = calcularEspera();
  if (espera > 0) {
    log("fetch", `Demora simulada: ${espera} ms`, { url });
    await esperar(espera);
  }

  try {
    const res = await fetchOriginal(url, opciones);
    if (res.ok) {
      log("fetch", `${res.status} OK`, { url });
    } else {
      log("error", `${res.status}: res.ok es false`, { url });
    }
    return res;
  } catch (error) {
    log("error", `Sin respuesta del servidor: ${error.message}`, { url });
    throw error;
  }
};
