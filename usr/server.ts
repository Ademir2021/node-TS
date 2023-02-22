import express, { NextFunction, Request, Response } from 'express';
import { routerUser } from './routes/RouterUsers';
import { routerProduct } from './routes/RouterProducts';
import { routerSale } from './routes/RouterSales';

const cors = require('cors')
const app = express();
const PORT = 3000 || 3005
app.use(cors());
app.use(express.json());
app.use(routerUser);
app.use(routerProduct);
app.use(routerSale)

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => { 
        return response.json({
            status: "Error",
            message: error.message,
        })
    })

app.listen(PORT, () => console.log("server is runing on", {PORT}));


    