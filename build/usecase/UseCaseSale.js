"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sale_1 = require("../entities/Sale");
let itensales = [];
itensales = [{ id_product: 4, amount: 3, val_product: 500 },
    { id_product: 2, amount: 3, val_product: 29.90 },
    { id_product: 3, amount: 4, val_product: 49.90 }];
let sales = { id: 0, name: 2, disc_sale: 2.80 };
const sale = new Sale_1.Sale(sales.id, sales.name, sales.disc_sale);
sale.insertItens(itensales);
