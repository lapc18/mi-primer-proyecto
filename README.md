# Mi Primer Proyecto

Primer proyecto del curso de React de Talendig (octubre 2026). Es una aplicación React creada con Vite que muestra una página de inicio con un contador interactivo y enlaces a la documentación y comunidad de Vite y React.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/) con [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)
- [ESLint](https://eslint.org/) con reglas para React Hooks y React Refresh

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- npm

## Instalación

```bash
cd mi-primer-proyecto
npm install
```

## Scripts disponibles

| Comando           | Descripción                                                       |
| ----------------- | ----------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga en caliente (HMR).   |
| `npm run build`   | Genera la versión de producción en la carpeta `dist/`.            |
| `npm run preview` | Sirve localmente la versión generada por `build` para probarla.   |
| `npm run lint`    | Revisa el código con ESLint.                                      |

Después de ejecutar `npm run dev`, abre en el navegador la URL que aparece en la terminal (por defecto `http://localhost:5173`).

## Estructura del proyecto

```
mi-primer-proyecto/
├── public/            # Archivos estáticos (favicon, íconos SVG)
├── src/
│   ├── assets/        # Imágenes importadas desde los componentes
│   ├── App.jsx        # Componente principal
│   ├── App.css        # Estilos del componente principal
│   ├── index.css      # Estilos globales
│   └── main.jsx       # Punto de entrada: monta <App /> en #root
├── index.html         # Plantilla HTML
├── vite.config.js     # Configuración de Vite
└── eslint.config.js   # Configuración de ESLint
```

## Cómo empezar a editar

Abre [src/App.jsx](src/App.jsx), modifica el contenido y guarda: los cambios se ven al instante en el navegador gracias a HMR.
