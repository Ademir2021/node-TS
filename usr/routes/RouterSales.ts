import { json, response, Router } from "express"
import { ConttrollersSales } from "../controllers/ConttrollerSales";

const routerSale = Router();
const conttrollersSales = new ConttrollersSales()

routerSale.get('/', conttrollersSales.index)
routerSale.get('/sales', conttrollersSales.select)
routerSale.post('/sales', conttrollersSales.insert)

export { routerSale }