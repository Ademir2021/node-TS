"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../entities/Product");
const product = new Product_1.Product(3, "Rec Midia Box B5", 580.00, 550.00, 1, 1);
const res = "";
const products = [
    { name: "Antena OffSet 60cm", price_max: 180.00, price_min: 160.00, brand: 1, sector: 1, bar_code: 1234567 },
    { name: "Roteador Wiffi TP-Link 300Mbps", price_max: 180.00, price_min: 160.00, brand: 1, sector: 1, bar_code: 12345678 },
    { name: "Estabilizador 300VA Ragtec", price_max: 138.00, price_min: 118.00, brand: 1, sector: 1, bar_code: 123456789 }
];
product.insertAll(products, res);
