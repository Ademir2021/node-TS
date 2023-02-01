"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pg = exports.client = void 0;
const Client = require('pg').Client;
const user_db = require('./.env.json');
exports.client = new Client(user_db);
class Pg {
    constructor(id, name) {
        this._id = 0;
        this._id = id;
        this._name = name;
    }
    ;
}
exports.Pg = Pg;
