import { Pg } from "./pg"
import { Users } from "./users"

let user = {id:124,name:"Luiz Fernando da Cruz"}
            

const user1:Pg = new Users(user.id, user.name);

//console.log(user1.find())
console.log(user1.findAll())
//console.log(user1.delete())

