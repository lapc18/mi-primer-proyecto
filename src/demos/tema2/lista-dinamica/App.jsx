import Lista from "./Lista";

function App() {
  const estudiantes = [
    { id: 1, nombre: "Ana García", curso: "React" },
    { id: 2, nombre: "Luis Pérez", curso: "Node.js" },
    { id: 3, nombre: "Sara Díaz", curso: "Diseño UX" },
    { id: 4, nombre: "Pedro Gómez", curso: "React" },
  ];

  return <Lista datos={estudiantes} />;
}

export default App;
