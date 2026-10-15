# Práctica Docker + Express

Aplicación web mínima creada con Express. Express atiende la ruta `/` y entrega `index.html`.

## Ejecutar localmente

```bash
npm ci
npm start
```

Abre `http://localhost:3000`.

## Ejecutar con Docker

```bash
docker build -t mi-web-plana .
docker run --rm -p 3000:3000 mi-web-plana
```

Abre `http://localhost:3000`.

## Publicación automática

Al subir cambios a `main`, GitHub Actions construye la imagen y la publica en Docker Hub con las etiquetas `latest` y el SHA del commit. Configura estos secretos del repositorio en **Settings → Secrets and variables → Actions**:

- `DOCKER_USERNAME`: usuario de Docker Hub.
- `DOCKER_PASSWORD`: token de acceso de Docker Hub.

También se puede iniciar el flujo desde la pestaña **Actions** con **Run workflow**.
