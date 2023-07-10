import express from 'express';
import dotenv from 'dotenv';
import DBConnection from './config/config.js';

const app = express();

dotenv.config();

const port = process.env.PORT 

DBConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})