import { useState, useEffect } from "react";
import { log } from "../lab/devlog"; // lab

function useDebounce(valor, delay = 500) {
  const [debounced, setDebounced] = useState(valor);

  useEffect(() => {
    log("effect", `useDebounce: timer de ${delay} ms`, { valor }); // lab
    const timer = setTimeout(() => {
      setDebounced(valor);
      log("state", "useDebounce: setDebounced", { valor }); // lab
    }, delay);
    return () => {
      clearTimeout(timer);
      log("cleanup", "useDebounce: clearTimeout", { valor }); // lab
    };
  }, [valor, delay]);

  return debounced;
}

export default useDebounce;
