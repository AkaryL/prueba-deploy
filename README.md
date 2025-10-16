# Prueba Deploy - Backend Simple

Backend de prueba simple con Node.js y Express que devuelve "Hola Mundo".

## 📋 Endpoints

### GET /
Devuelve un mensaje de "Hola Mundo"

**Respuesta:**
```json
{
  "message": "Hola Mundo",
  "timestamp": "2024-10-16T...",
  "status": "success"
}
```

### GET /health
Health check del servidor

**Respuesta:**
```json
{
  "status": "ok",
  "uptime": 123.45
}
```

## 🚀 Instalación

```bash
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

## 🌐 Producción

```bash
npm start
```

El servidor correrá en el puerto definido en la variable de entorno `PORT` o en el puerto 3000 por defecto.

## 📦 Tecnologías

- Node.js
- Express.js
