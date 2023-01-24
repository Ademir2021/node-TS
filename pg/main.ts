import { Pg } from "./Pg"
import { User } from './User'
export let users:IUser[] = []

interface IUser{
    id:number;
    name:string;
    username:string;
    password:string;
};

users = [
    {id:169, name:'Ademir Souza de Almeida', username:'ademir@provider.com', password:'123abc'},
    {id:140, name:'Maria Luiza de Almeida', username:'maria@provider.com', password:'123abc'},
    {id:141, name:'Augusto Muller de Almeida', username:'augusto@provider.com', password:'123abc'},
    {id:142, name:'Gustavo Souza de Almeida', username:'gustavo@provider.com', password:'123abc'},
    {id:143, name:'Francieli Dalsente de Almeida', username:'francieli@provider.com', password:'123abc'}
    ]

// let x = {id:0, name:'Ana Claudia de Amorin', username:'ana@provider.com', password:'123abc'}
// users.push(x)    

for (let i=0; users.length >i; i++){
const user_all:Pg = new User (users[i].id, users[i].name, users[i].username, users[i].password);
//console.log(user_all)
};

const user:Pg = new User (users[0].id, users[0].name, users[0].username, users[0].password)
console.log(user)
user.update()