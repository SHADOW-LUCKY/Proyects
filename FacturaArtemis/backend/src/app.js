import express from 'express';/* si no funciona revise el package.json en busca de "type": "module" */

const app = express();/* app es el servidor ahora */

app.set("port","4000");

export default app;