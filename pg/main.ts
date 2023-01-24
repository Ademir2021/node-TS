import { Pg } from "./Pg"
import { User } from "./User"
import { Product } from './Product';

interface IPg{
    table:string
    id:number
    name:string
    password:string
}

let users:IPg = {table:"users",id:134, name:"Luiz Fernando da Silva",password:"123abc"}
let products:IPg = {table:"products", id:3, name:"Mouse serial",password:"123"}
            
const user:User = new User(users.table, users.id, users.name);
const product:Pg = new Product(products.table, products.id, products.name)

//console.log(user1.find())
//console.log(user1.findAll())

console.log(user)
console.log(product)

