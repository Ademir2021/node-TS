import { User } from '../entities/User'
import { Request, Response } from "express"
const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.db);

client.connect()

export class ConttrolersUSers{

    async index(request: Request, response: Response) {
        response.status(200).json({status: 'sucesss'})
    };

   async select(request: Request, response: Response) {
    try{
        let id = 100
        console.log("starting the search !!")
        const resultado = await client.query("SELECT * FROM users WHERE id > '"+id+"'")
        let users = resultado.rows
        response.json({users});
        console.log("successful search !!")
        let x = JSON.stringify(users)
        console.log(x)
    }
    catch(ex){
        console.log("Error Occurred !!")}
    };

    async insert(request: Request, response: Response){
        let user:any = []
     const { name ,username, password } = request.body
     user.push({name, username, password})
     const _user = new User(1, user[0].name, user[0].username, user[0].password);
     _user.insert()
    console.log(user)
     response.json("User Register Success !!")
     
    };
}

// RUser.route('/users').post((req, res) => {
//     let user:any = []
//     const { name ,username, password } = req.body
//     user.push({name, username, password})
//     const _user = new User(1, user[0].name, user[0].username, user[0].password);
//     _user.insert()
//    console.log(user)
//     res.json("User Register Sussefull !!")
// });