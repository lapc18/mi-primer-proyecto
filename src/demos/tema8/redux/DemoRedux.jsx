// Envoltura del laboratorio: la demo tiene su propio <Provider store={store}>.
// En el proyecto, el Provider va en main.jsx: <Provider store={store}><App /></Provider>
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import TareasRedux from "./TareasRedux";

function DemoRedux() {
  return (
    <Provider store={store}>
      <TareasRedux />
    </Provider>
  );
}

export default DemoRedux;
