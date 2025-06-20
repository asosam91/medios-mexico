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

## Despliegue con AWS
Este repositorio está listo para integrarse en AWS CodePipeline y CodeDeploy.
El archivo `buildspec.yml` compila la aplicación y entrega los artefactos a CodeDeploy.
Durante la instalación, el script `scripts/setup_nginx.sh` configura Nginx en el
servidor de destino. Si la configuración no existe, el script crea
`/etc/nginx/sites-available/medios-mexico`, establece el enlace simbólico en
`/etc/nginx/sites-enabled/` y reinicia el servicio.

Para desplegar desde cero:
1. Crea un bucket de S3 y un role de servicio para CodeDeploy.
2. Configura una instancia EC2 con Nginx y el agente de CodeDeploy.
3. Conecta este repositorio a CodePipeline apuntando al branch deseado.
4. Una vez que la canalización se ejecute, la aplicación quedará disponible en
   `http://medios-mexico.adriansosa.net`.

## Licencia
Consulta el archivo [LICENSE](LICENSE) para más detalles.

