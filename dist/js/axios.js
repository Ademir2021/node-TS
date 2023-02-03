"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "http://localhost:3000/users";
let user = {
    name: "Maria Cecilia do Amarau",
    username: "cecilia@proider.com",
    password: "123abc"
};
addNewUser();
getUser();
function addNewUser() {
    axios_1.default.post(url, user)
        .then(response => {
        response.data;
    })
        .catch(error => console.log(error));
}
;
function getUser() {
    axios_1.default.get(url)
        .then(response => {
        const data = response.data;
        console.log(data);
    })
        .catch(error => console.log(error));
}
;
