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
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.pg);
exports.client.connect();
class ConttrollersUSers {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.status(200).json({ status: 'sucesss' });
            }
            catch (ex) {
                console.log("Error Occurred !!");
            }
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
                console.log(users);
            }
            catch (ex) {
                console.log("Error Occurred !!");
            }
        });
    }
    ;
    insert(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = [];
                const { name, username, password } = request.body;
                user.push({ name, username, password });
                yield exports.client.query('INSERT INTO users("name", "username", "password") VALUES (' + "'" + user[0].name + "', '" + user[0].username + "', '" + user[0].password + "');");
                console.log("User(s) inserted in the Table !!");
                const resultado = yield exports.client.query("SELECT name FROM users WHERE name = '" + user[0].name + "' LIMIT(1)");
                console.log('This is new Person: ', resultado.rows);
                response.json("User Register Success !!");
            }
            catch (ex) {
                console.log("Error Occurred !!");
            }
        });
    }
    ;
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** */
            }
            catch (ex) {
                console.log("Erro Ocorred");
            }
        });
    }
    ;
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** */
            }
            catch (ex) {
                console.log("Erro Ocorred");
            }
        });
    }
    ;
}
exports.ConttrollersUSers = ConttrollersUSers;
