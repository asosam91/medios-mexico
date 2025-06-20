# Medios México

Proyecto en React que presenta un listado de las principales empresas de medios en México. Utiliza Vite para el entorno de desarrollo y cuenta con un diseño sencillo, responsivo y profesional.

## Requisitos

- Node.js 18 o superior
- npm

## Estructura del proyecto

- `index.html`: página principal donde se monta la aplicación
- `src/data.js`: información de cada empresa
- `src/components/Card.jsx`: componente para renderizar las tarjetas
- `src/App.jsx`: componente principal
- `src/styles.css`: hoja de estilos

## Cómo comenzar

1. Clona este repositorio

   ```bash
   git clone <repo-url>
   cd medios-mexico
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo

   ```bash
   npm run dev
   ```

4. Abre el enlace indicado en la terminal (por defecto <http://localhost:5173>)

## Construir para producción

```
npm run build
```

Los archivos generados en `dist/` pueden subirse a cualquier servidor estático.

## Despliegue automatizado

Este proyecto cuenta con un flujo de GitHub Actions que compila y copia el contenido al servidor. Necesitarás definir en el repositorio los siguientes secretos:

- `SSH_HOST`
- `SSH_USER`
- `SSH_KEY`

Cada vez que hagas push a `main` se ejecutará el flujo que crea la build y configura Nginx mediante `scripts/setup_nginx.sh`.

## Licencia

Consulta el archivo [LICENSE](LICENSE) para más detalles.

