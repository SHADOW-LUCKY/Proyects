import {config} from 'dotenv';

config();
/* sacar las variables del env(datos sensibles) */
export default {
host:process.env.HOST,
database:process.env.DATABASE,
user:process.env.USUARIO,
password:process.env.PASSWORD
} 