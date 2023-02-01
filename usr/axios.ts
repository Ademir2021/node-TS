import axios from 'axios'
const url = "http://localhost:3000/users";

let user = {
    name:"Ademirs Souza de Almeida",
    username:"centroserra@gmail.com",
    password:"123abc"
}

addNewUser()

 function addNewUser(){
     axios.post(url, user)
    .then(response =>{
       response.data
    })
    .catch(error => console.log(error))
 };
 
function getUser(){
    axios.get(url)
    .then(response =>{
        const data =  response.data
        console.log(data)
    })
    .catch(error =>console.log(error))
};getUser()