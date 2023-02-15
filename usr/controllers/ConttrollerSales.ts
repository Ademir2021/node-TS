import { Request, Response } from "express"
import { IItensSale } from '../interfaces/ISale';
const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.pg);

client.connect()

export class ConttrollersSales{

    async index(request: Request, response: Response) {
    try{
        response.status(200).json({status: 'sucesss'})
    }catch(ex){
        console.log("Error Occurred !!")}
    };

    async select(request: Request, response: Response) {
    try{
        let id = 0
        /**Consulta Venda */
        console.log("starting the search !!")
        const resultSales = await client.query("SELECT *FROM sales WHERE id_sale > '"+id+"'")
        const sales = resultSales.rows
        response.json(sales);
        console.log("successful search !!")
        console.log(sales)

        /**Consulta Itens da Venda - em teste */ 
        const resultItensSale = await client.query("SELECT *FROM itens_sale WHERE id_item_sequen > '"+id+"'")
        const itensSale = resultItensSale.rows
        //response.json( itensSale);
        console.log("successful search !!")
        console.log(itensSale)

    }catch(ex){
        console.log("Error Occurred !!")}
    };

    async insert(request: Request, response: Response){
    try{
        const user:any = []
        const { name ,username, password } = request.body
        user.push({  })
        await client.query('INSERT INTO table("", "", "") VALUES ('+" 'x', 'x', 'x');")
        console.log("User(s) inserted in the Table !!")
        const result = await client.query("SELECT total_sale FROM sale WHERE total_sale = '"+user[0].name+"' LIMIT(1)")
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