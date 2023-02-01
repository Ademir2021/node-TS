import axios from 'axios';
const url = "http://localhost:3000/users";
import { IUser } from '../dto/IUser' 

let user:IUser
 user = {name:"Ademir Souza de Almeida",username:"ademir_gre@hotmail.com",password:""}

 let del = 2;

getUser()
addNewUser()
//updateUser()
//deleteUser()
//getOneUser()

function getUser(){
    axios.get(url)
    .then(response =>{
        //const data = response.data
        const data =  response.data
        console.log(data)
    })
    .catch(error =>console.log(error))
}


function addNewUser(){
    axios.post(url, user)
    .then(response =>{
        console.log(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

let userUpdate = "" //test
function updateUser(){
    axios.put(`${url}/1`, userUpdate)
    .then(response =>{
        console.log(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

function deleteUser(){
    axios.delete(`${url}/${del}`)
    .then(response => {
        console.log(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

function getOneUser(){
    axios.get(`${url}/2`)
    .then(response => {
        const data = response.data
    })
    .catch(error => console.log(error))
}




