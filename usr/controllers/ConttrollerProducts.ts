import { Request, Response } from "express"
const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.pg);

client.connect()

export class ConttrollersProducts{

    async index(request: Request, response: Response) {
    try{
        response.status(200).json({status: 'sucesss'})
    }catch(ex){
        console.log("Error Occurred !!")}
    };

    async select(request: Request, response: Response) {
    try{
        let id = 0
        console.log("starting the search !!")
        const resultado = await client.query("SELECT * FROM products WHERE id_product > '"+id+"'")
        const result = resultado.rows
        const products = result
        response.json(products);
        console.log("successful search !!")
        console.log(products)
    }catch(ex){
        console.log("Error Occurred !!")}
    };

    async insert(request: Request, response: Response){
    try{
        const user:any = []
        const { name ,username, password } = request.body
        user.push({name, username, password})
        await client.query('INSERT INTO users("name", "username", "password") VALUES ('+"'"+user[0].name+"', '"+user[0].username+"', '"+user[0].password+"');")
        console.log("User(s) inserted in the Table !!")
        const result = await client.query("SELECT name FROM users WHERE name = '"+user[0].name+"' LIMIT(1)")
        console.log('This is new Person: ', result.rows)
        response.json("User Register Success !!")
    }catch(ex){
        console.log("Error Occurred !!")}
    };

    async update(request: Request, response: Response){
        try{
        /** */
    }catch(ex){
            console.log("Erro Ocorred")}
    };

    async delete(request: Request, response: Response){
        try{
        /** */
    }catch(ex){
            console.log("Erro Ocorred")}
    };
}