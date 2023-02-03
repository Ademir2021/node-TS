import { RUser } from './routes/RUsers';
import express, { NextFunction, Request, Response } from 'express';
const Client = require('pg').Client;
const config  = require ('../.env')
export const client = new Client(config.db);

const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
app.use(RUser);
client.connect();

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => { 
        return response.json({
            status: "Error",
            message: error.message,
        })
    })

app.listen(3000, () => console.log("server is runing on port 3000"));


    