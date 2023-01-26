import { Pg } from "./Pg"
import { User } from './User'
import { Product } from './Product';
import { Person } from './Person'
import { Sale } from './Sale'
let users:IUser[] = []

interface IUser{
    id:number;
    name:string;
    username:string;
    password:string;
};

users = [
    {id:1, name:'Ademir Souza de Almeida', username:'ademir@provider.com', password:'123abc'},
    {id:2, name:'Maria Luiza de Almeida', username:'maria@provider.com', password:'123abc'},
    {id:3, name:'Augusto Muller de Almeida', username:'augusto@provider.com', password:'123abc'},
    {id:4, name:'Gustavo Souza de Almeida', username:'gustavo@provider.com', password:'123abc'},
    {id:5, name:'Francieli Dalsente de Almeida', username:'francieli@provider.com', password:'123abc'}
    ]

//  let x = {id:6, name:'Ana Claudia de Amorin', username:'ana@provider.com', password:'123abc'}
//  users.push(x)    

const user:Pg = new User(users[0].id, users[0].name, users[0].username, users[0].password)

const product:Pg = new Product(3, "Caixa Som Mult", 49.90, 39.00, 1, 1)

//const person:Pg = new Person(3, "Augusto Muller de Almeida", "99999999974","Rua Joao Sherer", 1)

let itensales = [{id:1, name:1, id_product:1, amount:2, val_product:19.90, disc_sale:2.5},
                 {id:2, name:2, id_product:2, amount:2, val_product:29.90, disc_sale:2.5},
                 {id:3, name:3, id_product:3, amount:3, val_product:49.90, disc_sale:2.5}]


var sale:Pg = new Sale(itensales[0].id, itensales[0].name, itensales[0].id_product, itensales[0].amount, itensales[0].val_product, itensales[0].disc_sale)

//console.log(sale)

sale.insertItens(itensales)
//console.log(itensales)

