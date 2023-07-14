import DBconnection from './config/config.js';
import dotenv from 'dotenv';
import Server from './models/server.js';

dotenv.config();
DBconnection();
const server = new Server();

server.listener();
