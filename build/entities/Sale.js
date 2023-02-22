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
exports.Sale = exports.client = void 0;
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.pg);
class Sale {
    constructor(id, name, disc_sale) {
        this._disc_sale = 0;
        this._id = id;
        this._name = name;
        this._disc_sale = disc_sale;
    }
    ;
    insert() { }
    ;
    insertAll() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    ;
    insertItens(itensales) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("iniciando a conexão !");
                yield exports.client.connect();
                console.log("Conexão bem sucedida !");
                console.log("consultado a última venda");
                const result_num_sale = yield exports.client.query("SELECT MAX(id_sale) FROM sales;");
                let id = result_num_sale.rows[0].max;
                let num_sale = id + 1;
                console.log(num_sale);
                console.log("inserindo itens vendidos !!");
                for (let i = 0; itensales.length > i; i++) {
                    let sum_total_item = 0;
                    sum_total_item = itensales[i].amount * itensales[i].val_product;
                    yield exports.client.query('INSERT INTO itens_sale("fk_sale", "fk_product", "amount_product", "val_product", "total_product") VALUES (' + "'" + num_sale + "', '" + itensales[i].id_product + "', '" + itensales[i].amount + "', '" + itensales[i].val_product + "','" + sum_total_item + "');");
                }
                const result_itens = yield exports.client.query("SELECT * FROM itens_sale WHERE fk_sale = '" + num_sale + "'");
                let _result_itens = result_itens.rows;
                console.log("Produtos inserids na tabela !!");
                console.table(_result_itens);
                console.log("Lançando a Venda");
                const result_total_itens = yield exports.client.query("SELECT SUM(total_product) AS total FROM itens_sale WHERE fk_sale = '" + num_sale + "'");
                let sub_total_sale = 0;
                sub_total_sale = result_total_itens.rows[0].total;
                let total_sale = sub_total_sale - this._disc_sale;
                yield exports.client.query('INSERT INTO sales("fk_name_pers", "val_rec", "disc_sale", "total_sale") VALUES (' + "'" + this._name + "', '" + sub_total_sale + "', '" + this._disc_sale + "', '" + total_sale + "');");
                const result_sale = yield exports.client.query("SELECT *FROM sales WHERE id_sale = '" + num_sale + "'");
                console.table(result_sale.rows);
                console.log("Venda efetuada com sucesso !!");
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
    update() { }
    ;
    find() { }
    ;
    findAll() { }
    ;
    delete() { }
    ;
}
exports.Sale = Sale;
