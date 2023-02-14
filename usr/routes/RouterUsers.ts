import { json, response, Router } from "express"
import { ConttrollersProducts } from "../controllers/ConttrollerProducts";
import { ConttrollersUSers } from "../controllers/ConttrollerUsers";

const routerUser = Router();
const conttrollersUSers = new ConttrollersUSers()

routerUser.get('/', conttrollersUSers.index)
routerUser.get('/users', conttrollersUSers.select)
routerUser.post('/users', conttrollersUSers.insert)
routerUser.post('/users', conttrollersUSers.update)
routerUser.post('/users', conttrollersUSers.delete)

const routerProduct = Router();
const conttrollersProducts = new ConttrollersProducts()

routerProduct.get('/', conttrollersProducts.index)
routerProduct.get('/products', conttrollersProducts.select)

 export { routerUser, routerProduct }