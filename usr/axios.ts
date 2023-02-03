import axios from 'axios'
const url = "http://localhost:3000/users";

let user = {
    name:"Maria Cecilia do Amarau",
    username:"cecilia@proider.com",
    password:"123abc"
}

addNewUser()
getUser()

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
};
