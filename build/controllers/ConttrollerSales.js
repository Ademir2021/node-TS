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
exports.ConttrollersSales = exports.client = void 0;
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.pg);
exports.client.connect();
class ConttrollersSales {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                response.status(200).json({ status: 'sucesss' });
            }
            catch (error) {
                console.log(error, "Error Occurred !!");
            }
        });
    }
    ;
    select(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = 0;
                /**Consulta Venda */
                console.log("starting the search !!");
                const resultSales = yield exports.client.query("SELECT *FROM sales WHERE id_sale > '" + id + "'");
                const sales = resultSales.rows;
                response.json(sales);
                console.log("successful search !!");
                console.log(sales);
                /**Consulta Itens da Venda - em teste */
                const resultItensSale = yield exports.client.query("SELECT *FROM itens_sale WHERE id_item_sequen > '" + id + "'");
                const itensSale = resultItensSale.rows;
                //response.json( itensSale);
                console.log("successful search !!");
                console.log(itensSale);
            }
            catch (error) {
                console.log(error, "Error Occurred !!");
            }
        });
    }
    ;
    insert(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itens = request.body;
                /** */
                console.log("Consulting the last sale");
                const result_num_sale = yield exports.client.query("SELECT MAX(id_sale) FROM sales;");
                let id = result_num_sale.rows[0].max;
                let num_sale = id + 1;
                console.log(num_sale);
                /** */
                console.log("Entering sold items !!");
                for (let i = 1; itens.length > i; i++) {
                    let sum_total_item = 0;
                    sum_total_item = itens[i].amount_product * itens[i].val_product;
                    yield exports.client.query('INSERT INTO itens_sale("fk_sale", "fk_product", "amount_product", "val_product", "total_product") VALUES (' + "'" + num_sale + "', '" + itens[i].id_product + "', '" + itens[i].amount_product + "', '" + itens[i].val_product + "','" + sum_total_item + "');");
                }
                const result_itens = yield exports.client.query("SELECT * FROM itens_sale WHERE fk_sale = '" + num_sale + "'");
                let _result_itens = result_itens.rows;
                console.log("Successfully inserted items !!");
                console.table(_result_itens);
                /** */
                console.log("Entering sales");
                const result_total_itens = yield exports.client.query("SELECT SUM (total_product) AS total FROM itens_sale WHERE fk_sale = '" + num_sale + "'");
                let sub_total_sale = 0;
                sub_total_sale = result_total_itens.rows[0].total;
                let total_sale = sub_total_sale - itens[0].disc_sale;
                yield exports.client.query('INSERT INTO sales("fk_name_pers", "val_rec", "disc_sale", "total_sale") VALUES (' + "'" + itens[0].fk_name_pers + "', '" + sub_total_sale + "', '" + itens[0].disc_sale + "', '" + total_sale + "');");
                const result_sale = yield exports.client.query("SELECT *FROM sales WHERE id_sale = '" + num_sale + "'");
                console.table(result_sale.rows);
                console.log("Successful Sale !!");
                /** */
                response.json("Sale Register Success !!");
            }
            catch (error) {
                console.log(error, "Error Occurred !!");
            }
        });
    }
    ;
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** */
            }
            catch (error) {
                console.log(error, "Error Occurred !!");
            }
        });
    }
    ;
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /** */
            }
            catch (error) {
                console.log(error, "Erro Occurred !!");
            }
        });
    }
    ;
}
exports.ConttrollersSales = ConttrollersSales;
