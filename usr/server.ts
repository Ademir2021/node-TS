import { routerUser } from './routes/RouterUsers';
import { routerProduct } from './routes/RouterProducts';
import express, { NextFunction, Request, Response } from 'express';

const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
app.use(routerUser);
app.use(routerProduct);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => { 
        return response.json({
            status: "Error",
            message: error.message,
        })
    })

app.listen(3000, () => console.log("server is runing on port 3000"));


    