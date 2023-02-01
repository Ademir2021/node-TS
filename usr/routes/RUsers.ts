const Client = require('pg').Client;
import { User } from '../provider/pg/User'
import { json, response, Router} from "express"

let id:number = 0
let users = [{ id: 0, name: "teste", username: "", password: "" }]

const RUser = Router();

RUser.route('/users').get((req, res) => res.json({
    users
}));

RUser.route('/users').post((req, res) => {
    let user:any = []
    const { name ,username, password } = req.body
    user.push({name, username, password})
    const _user = new User(1, user[0].name, user[0].username, user[0].password);
    _user.insert()
   console.log(user)
    res.json("User Register Sussefull !!")
});

export { RUser }