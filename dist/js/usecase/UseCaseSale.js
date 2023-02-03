"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sale_1 = require("..//entities/Sale");
let itensales = [];
itensales = [{ id_product: 4, amount: 3, val_product: 500 },
    { id_product: 4, amount: 1, val_product: 580 },
    { id_product: 4, amount: 1, val_product: 550 }];
let sales = { id: 0, name: 1, disc_sale: 20 };
const sale = new Sale_1.Sale(sales.id, sales.name, sales.disc_sale);
