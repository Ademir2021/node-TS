"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConttrollersUSers = exports.client = void 0;
const User_1 = require("../entities/User");
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.db);
exports.client.connect();
class ConttrollersUSers {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            response.status(200).json({ status: 'sucesss' });
        });
    }
    ;
    select(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = 100;
                console.log("starting the search !!");
                const resultado = yield exports.client.query("SELECT * FROM users WHERE id > '" + id + "'");
                let users = resultado.rows;
                response.json({ users });
                console.log("successful search !!");
                let x = JSON.stringify(users);
                console.log(x);
            }
            catch (ex) {
                console.log("Error Occurred !!");
            }
        });
    }
    ;
    insert(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = [];
            const { name, username, password } = request.body;
            user.push({ name, username, password });
            const new_user = new User_1.User(1, user[0].name, user[0].username, user[0].password);
            new_user.insert();
            console.log(user);
            response.json("User Register Success !!");
        });
    }
    ;
}
exports.ConttrollersUSers = ConttrollersUSers;
// RUser.route('/users').post((req, res) => {
//     let user:any = []
//     const { name ,username, password } = req.body
//     user.push({name, username, password})
//     const _user = new User(1, user[0].name, user[0].username, user[0].password);
//     _user.insert()
//    console.log(user)
//     res.json("User Register Sussefull !!")
// });
