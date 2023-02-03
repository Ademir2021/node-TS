"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterUsers_1 = require("./routes/RouterUsers");
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use(RouterUsers_1.routerUser);
app.use((error, request, response, next) => {
    return response.json({
        status: "Error",
        message: error.message,
    });
});
app.listen(3000, () => console.log("server is runing on port 3000"));
