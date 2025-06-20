# Medios México (React)

Aplicación React que lista a las empresas de medios más influyentes de México. El proyecto usa Vite para un desarrollo rápido y ofrece una interfaz formal y profesional.

## Requisitos
Necesitas Node.js 18 o superior y npm instalados en tu sistema.

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


## Integración continua con GitHub Actions
Este repositorio incluye un flujo de trabajo que compila y despliega la aplicación.
Para activarlo define en tu repositorio los secretos:
- `SSH_HOST`: dirección del servidor.
- `SSH_USER`: usuario con permisos de despliegue.
- `SSH_KEY`: clave privada en formato PEM.

Cada push a `main` ejecutará:
1. Instalación y pruebas.
2. Construcción con `npm run build`.
3. Copia de `dist/` al servidor.
4. Ejecución de `scripts/setup_nginx.sh` para configurar Nginx.

## Licencia
Consulta el archivo [LICENSE](LICENSE) para más detalles.

