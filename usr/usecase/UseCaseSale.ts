import { Pg } from "../provider/pg/Pg";
import { Sale } from '../provider/pg/Sale';
import { IItensSale } from "../dto/ISale";

let itensales:IItensSale[] = []

itensales = [{id_product:4, amount:3, val_product:500},
    {id_product:4, amount:1, val_product:580},
    {id_product:4, amount:1, val_product:550}];

let sales = {id:0, name:1, disc_sale:20}; 

const sale:Pg = new Sale(sales.id, sales.name, sales.disc_sale);
