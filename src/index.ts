import http, { IncomingMessage, ServerResponse } from "http";

const hostname: string = "0.0.0.0";
const port: number = 3000;

// Agregamos los tipos explícitos: IncomingMessage (req) y ServerResponse (res)
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola Mundo! shupalo scott\n");
  }
);

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
