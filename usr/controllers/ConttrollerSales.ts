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
    }catch(error){
        console.log(error, "Error Occurred !!")}
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

    }catch(error){
        console.log(error, "Error Occurred !!")}
    };

    async insert(request: Request, response: Response){
    try{
        const itens = request.body
        /** */
        console.log("Consulting the last sale");
        const result_num_sale = await client.query("SELECT MAX(id_sale) FROM sales;");
        let id:number = result_num_sale.rows[0].max;
        let num_sale:number = id + 1;
        console.log(num_sale);
        /** */
        console.log("Entering sold items !!")
        for (let i = 1; itens.length > i; i++){
        let sum_total_item:number = 0
        sum_total_item = itens[i].amount_product * itens[i].val_product;
        await client.query('INSERT INTO itens_sale("fk_sale", "fk_product", "amount_product", "val_product", "total_product") VALUES ('+"'"+num_sale+"', '"+itens[i].id_product+"', '"+itens[i].amount_product+"', '"+itens[i].val_product+"','"+sum_total_item+"');")
        }
        const result_itens = await client.query("SELECT * FROM itens_sale WHERE fk_sale = '"+num_sale+"'")
        let _result_itens = result_itens.rows
        console.log("Successfully inserted items !!")
        console.table(_result_itens)
        /** */
        console.log("Entering sales")
        const result_total_itens = await client.query("SELECT SUM (total_product) AS total FROM itens_sale WHERE fk_sale = '"+num_sale+"'");
        let sub_total_sale:number = 0
        sub_total_sale = result_total_itens.rows[0].total
        let total_sale:number = sub_total_sale - itens[0].disc_sale
        await client.query('INSERT INTO sales("fk_name_pers", "val_rec", "disc_sale", "total_sale") VALUES ('+"'"+itens[0].fk_name_pers+"', '"+sub_total_sale+"', '"+itens[0].disc_sale+"', '"+total_sale+"');");
        const result_sale = await client.query("SELECT *FROM sales WHERE id_sale = '"+num_sale+"'")
        console.table(result_sale.rows)
        console.log("Successful Sale !!")
        /** */
        response.json("Sale Register Success !!")
    }catch(error){
        console.log(error, "Error Occurred !!")}
    };

    async update(request: Request, response: Response){
        try{
        /** */
    }catch(error){
            console.log(error, "Error Occurred !!")}
    };

    async delete(request: Request, response: Response){
        try{
        /** */
    }catch(error){
            console.log(error, "Erro Occurred !!")}
    };
}