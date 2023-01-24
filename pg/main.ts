import { Pg } from "./Pg"
import { User } from "./User"
import { Product } from './Product';

interface IUser{
    table:string
    id:number
    name:string
    password:string
};
interface IProducts{
    table:string
    id:number
    name:string
    price:number
}

//let users:IUser = {}
//let products:IProducts = {}
let users:IUser = {table:"users",id:139, name:"Luiz Fernando da Silva",password:"123abc"}
let products:IProducts = {table:"products", id:3, name:"Mouse serial", price:12.59}
            
const user:Pg = new User(users.table, users.id, users.name, users.password);
const product:Pg = new Product(products.table, products.id, products.name, products.price)

console.log(user.find())
//console.log(user1.findAll())

// console.log(user)
// console.log(product)

