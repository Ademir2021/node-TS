import { json, response, Router} from "express"
import { ConttrolersUSers } from "../controllers/ConttrolerUsers";

const RUser = Router();

const conttrolersUSers = new ConttrolersUSers()

RUser.get('/', conttrolersUSers.index)
RUser.get('/users', conttrolersUSers.select)
RUser.post('/users', conttrolersUSers.insert)

 export { RUser }