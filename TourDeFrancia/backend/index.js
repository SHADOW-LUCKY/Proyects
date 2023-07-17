import dotenv from 'dotenv';
import DBConnection from './config/config.js';
import Server from './models/server.js';
// const corsOption={
//     methods: ["GET","POST","PUT","DELETE"],
// }
dotenv.config();
DBConnection();

const server = new Server();

server.listener();


