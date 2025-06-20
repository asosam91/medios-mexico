# Medios México (React)

Aplicación React que muestra a las principales empresas de medios y noticias de México. Utiliza Vite como bundler y ofrece una interfaz responsiva.

## Estructura
- **index.html**: página principal con el contenedor de React.
- **src/data.js**: información detallada de cada compañía.
- **src/App.jsx**: componente que construye las tarjetas de forma dinámica.
- **src/styles.css**: estilos y maquetado responsivo.

## Ejecución local
1. Clona el repositorio y entra en la carpeta:
   ```bash
   git clone <repo-url>
   cd medios-mexico
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre el enlace que muestra la terminal (por defecto `http://localhost:5173`).

## Construcción para producción
```bash
npm run build
```
Los archivos listos se generan en `dist/` y pueden desplegarse en un servidor estático o en servicios como AWS.

## Licencia
Consulta el archivo [LICENSE](LICENSE) para más detalles.

