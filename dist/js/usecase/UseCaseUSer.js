"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "http://localhost:3000/users";
let user;
user = { name: "Ademir Souza de Almeida", username: "ademir_gre@hotmail.com", password: "" };
let del = 2;
getUser();
addNewUser();
//updateUser()
//deleteUser()
//getOneUser()
function getUser() {
    axios_1.default.get(url)
        .then(response => {
        //const data = response.data
        const data = response.data;
        console.log(data);
    })
        .catch(error => console.log(error));
}
function addNewUser() {
    axios_1.default.post(url, user)
        .then(response => {
        console.log(JSON.stringify(response.data));
    })
        .catch(error => console.log(error));
}
let userUpdate = ""; //test
function updateUser() {
    axios_1.default.put(`${url}/1`, userUpdate)
        .then(response => {
        console.log(JSON.stringify(response.data));
    })
        .catch(error => console.log(error));
}
function deleteUser() {
    axios_1.default.delete(`${url}/${del}`)
        .then(response => {
        console.log(JSON.stringify(response.data));
    })
        .catch(error => console.log(error));
}
function getOneUser() {
    axios_1.default.get(`${url}/2`)
        .then(response => {
        const data = response.data;
    })
        .catch(error => console.log(error));
}
