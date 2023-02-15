import { json, response, Router } from "express"
import { ConttrollersProducts } from "../controllers/ConttrollerProducts";

const routerProduct = Router();
const conttrollersProducts = new ConttrollersProducts()

routerProduct.get('/', conttrollersProducts.index)
routerProduct.get('/products', conttrollersProducts.select)
routerProduct.post('/products', conttrollersProducts.insert)

export { routerProduct }