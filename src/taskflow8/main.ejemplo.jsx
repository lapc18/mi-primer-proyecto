import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import TemaProvider from "./context/TemaProvider";
import TareasProvider from "./context/TareasProvider";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TemaProvider>
        <TareasProvider>
          <App />
        </TareasProvider>
      </TemaProvider>
    </BrowserRouter>
  </StrictMode>
);
