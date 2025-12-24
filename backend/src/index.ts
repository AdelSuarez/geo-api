// import http, { IncomingMessage, ServerResponse } from "http";

// const hostname: string = "0.0.0.0";
// const port: number = 3000;

// // Agregamos los tipos explícitos: IncomingMessage (req) y ServerResponse (res)
// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hola Mundo! shupalo scott\n");
//   }
// );

// server.listen(port, hostname, () => {
//   console.log(`Servidor corriendo en http://localhost:${port}/`);
// });


import express, { Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
// import mongoose from 'mongoose'; // <--- COMENTADO: No usaremos BD por ahora

// Importar rutas
import geoRoutes from './routes/testRoute';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- CONFIGURACIÓN SWAGGER ---
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CiudadData API',
      version: '1.0.0',
      description: 'API Gateway sin conexión a BD',
    },
    servers: [
      { url: `http://localhost:${PORT}` }
    ],
  },
  // Apunta a tus archivos de rutas
  apis: ['./src/routes/*.ts'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --- RUTAS ---
app.use('/api/geo', geoRoutes);

// Ruta simple

app.get('/api/saludo', (req: Request, res: Response) => {
  res.json({ 
    mensaje: '¡Conexión exitosa con el Backend!',
    fecha: new Date().toLocaleString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});