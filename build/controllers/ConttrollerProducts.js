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
exports.ConttrollersProducts = exports.client = void 0;
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.pg);
exports.client.connect();
class ConttrollersProducts {
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
                let id = 0;
                console.log("starting the search !!");
                const resultado = yield exports.client.query("SELECT * FROM products WHERE id_product > '" + id + "'");
                const result = resultado.rows;
                const products = result;
                response.json(products);
                console.log("successful search !!");
                console.log(products);
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
                const product = [];
                const { name, val_max, val_min, brand, sector, bar_code } = request.body;
                product.push({ name, val_max, val_min, brand, sector, bar_code });
                yield exports.client.query('INSERT INTO products("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector", "bar_code") VALUES (' + "'" + product[0].name + "', '" + product[0].val_max + "', '" + product[0].val_min + "', '" + product[0].brand + "', '" + product[0].sector + "', '" + product[0].bar_code + "');");
                console.log("Product(s) inserted in the Table !!");
                const result = yield exports.client.query("SELECT descric_product FROM products WHERE descric_product = '" + product[0].name + "' LIMIT(1)");
                console.log('This is new Product: ', result.rows);
                response.json("Product Register Success !!");
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
exports.ConttrollersProducts = ConttrollersProducts;
