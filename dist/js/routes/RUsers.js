"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUser = void 0;
const Client = require('pg').Client;
const User_1 = require("../provider/pg/User");
const express_1 = require("express");
const RUser = (0, express_1.Router)();
exports.RUser = RUser;
let id = 0;
RUser.route('/users').post((req, res) => {
    let user = [];
    const { name, username, password } = req.body;
    //const { username } = req.body
    //const { password } = req.body
    user.push({ name, username, password });
    const _user = new User_1.User(1, user[0].name, user[0].username, user[0].password);
    _user.insert();
    res.json("User register");
});
