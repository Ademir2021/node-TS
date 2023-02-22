"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RouterUsers_1 = require("./routes/RouterUsers");
const RouterProducts_1 = require("./routes/RouterProducts");
const RouterSales_1 = require("./routes/RouterSales");
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = 3000 || 3005;
app.use(cors());
app.use(express_1.default.json());
app.use(RouterUsers_1.routerUser);
app.use(RouterProducts_1.routerProduct);
app.use(RouterSales_1.routerSale);
app.use((error, request, response, next) => {
    return response.json({
        status: "Error",
        message: error.message,
    });
});
app.listen(PORT, () => console.log("server is runing on", { PORT }));
