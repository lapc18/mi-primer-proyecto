import { Component } from "react";
import { log } from "./devlog";

// Si una demo lanza un error, el laboratorio sigue funcionando.
class LimiteError extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    log("error", "La demo lanzó un error", error);
  }

  render() {
    if (this.state.error) {
      return (
        <p className="alerta alerta-error">
          La demo falló: {this.state.error.message}. Usa “Reiniciar demo”.
        </p>
      );
    }
    return this.props.children;
  }
}

export default LimiteError;
