import { json, response, Router } from "express"
import { ConttrollersSales } from "../controllers/ConttrollerSales";

const routerSale = Router();
const conttrollersSales = new ConttrollersSales()

routerSale.get('/', conttrollersSales.index)
routerSale.get('/sales', conttrollersSales.select)
//routerProduct.post('/products', conttrollersSales.insert)

export { routerSale }