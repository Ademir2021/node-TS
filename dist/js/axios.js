"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "http://localhost:3000/users";
let user = {
    name: "Ademirs Souza de Almeida",
    username: "centroserra@gmail.com",
    password: "123abc"
};
function addNewUser() {
    axios_1.default.post(url, user)
        .then(response => {
        response.data;
    })
        .catch(error => console.log(error));
}
addNewUser();
