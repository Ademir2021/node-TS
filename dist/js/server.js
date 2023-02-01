"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RUsers_1 = require("./routes/RUsers");
const express_1 = __importDefault(require("express"));
//import {cors } from 'cors'
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use(RUsers_1.RUser);
app.use((error, request, response, next) => {
    return response.json({
        status: "Error",
        message: error.message,
    });
});
app.listen(3000, () => console.log("server is runing on port 3000"));
