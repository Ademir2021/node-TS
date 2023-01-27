import { Pg } from "./Pg";
import { User } from './User';
import { Product } from './Product';
import { Person } from './Person';
import { Sale } from './Sale';
let users:IUser[] = [];
let sales:ISales;
let itensales:IItensales[] = [];

interface IUser{
    id:number;
    name:string;
    username:string;
    password:string;
};

interface IItensales{
    id_product:number;
    amount:number;
    val_product:number;
};

interface ISales{
    id:number;
    name:string | number;
    disc_sale:number;
};

users = [{id:1, name:'Ademir Souza de Almeida', username:'ademir@provider.com', password:'123abc'},
         {id:2, name:'Maria Luiza de Almeida', username:'maria@provider.com', password:'123abc'}];

const user:Pg = new User(users[0].id, users[0].name, users[0].username, users[0].password);

const product:Pg = new Product(3, "Caixa Som Mult", 49.90, 39.00, 1, 1);

const person:Pg = new Person(3, "Augusto Muller de Almeida", "99999999974","Rua Joao Sherer", 1);

itensales = [{id_product:1, amount:2, val_product:19.90},
                 {id_product:2, amount:2, val_product:25.90},
                 {id_product:3, amount:2, val_product:39.90}];

sales = {id:1, name:1, disc_sale:2.30}; 

const sale:Pg = new Sale(sales.id, sales.name, sales.disc_sale);

//console.log(sale)
//console.log(itensales)

sale.insertItens(itensales)

