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
        const product:any = []
        const {name, val_max, val_min, brand, sector, bar_code} = request.body
        product.push({name, val_max, val_min, brand, sector, bar_code})
        await client.query('INSERT INTO products("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector", "bar_code") VALUES ('+"'"+product[0].name+"', '"+product[0].val_max+"', '"+product[0].val_min+"', '"+product[0].brand+"', '"+product[0].sector+"', '"+product[0].bar_code+"');")
        console.log("Product(s) inserted in the Table !!")
        const result = await client.query("SELECT descric_product FROM products WHERE descric_product = '"+product[0].name+"' LIMIT(1)")
        console.log('This is new Product: ', result.rows)
        response.json("Product Register Success !!")
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