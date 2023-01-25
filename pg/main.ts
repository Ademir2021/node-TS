import { Pg } from "./Pg"
import { User } from './User'
import { Product } from './Product';
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


const user:Pg = new User (users[0].id, users[0].name, users[0].username, users[0].password)

user.insert();
user.insertAll(users);
// user.update();
 //user.findAll();
// user.find();
// user.delete();
