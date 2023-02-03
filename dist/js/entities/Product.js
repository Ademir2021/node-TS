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
exports.Product = exports.client = void 0;
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.pg);
class Product {
    constructor(id, name, price, price_min, brand, sector) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._price_min = price_min;
        this._brand = brand;
        this._sector = sector;
    }
    ;
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("iniciando a conexão !");
                yield exports.client.connect();
                console.log("Conexão bem sucedida !");
                yield exports.client.query('insert into products("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector") values (' + "'" + this._name + "', '" + this._price + "', '" + this._price_min + "', '" + this._brand + "', '" + this._sector + "');");
                console.log("Produto inserido na tabela !");
                const resultado = yield exports.client.query("select * from products");
                console.table(resultado.rows);
            }
            catch (ex) {
                console.log("Ocorreu um erro !! Erro: " + ex);
            }
            finally {
                yield exports.client.end();
                console.log("Cliente desconectado !!");
            }
        });
    }
    ;
    insertAll(product) {
        product;
    }
    ;
    insertItens() {
    }
    update() {
    }
    ;
    find() {
    }
    ;
    findAll() {
    }
    ;
    delete() {
    }
    ;
}
exports.Product = Product;
