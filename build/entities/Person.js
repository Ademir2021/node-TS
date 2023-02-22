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
exports.Person = exports.client = void 0;
const Client = require('pg').Client;
const config = require('../../.env');
exports.client = new Client(config.pg);
class Person {
    constructor(id, name, cpf, address, name_filial) {
        this._id = id;
        this._name = name;
        this._cpf = cpf;
        this._address = address;
        this._name_filial = name_filial;
    }
    ;
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("iniciando a conexão !");
                yield exports.client.connect();
                console.log("Conexão bem sucedida !");
                yield exports.client.query('insert into persons("name_pers","cpf_pers","address_pers","fk_name_filial") values (' + "'" + this._name + "', '" + this._cpf + "', '" + this._address + "', '" + this._name_filial + "');");
                console.log("Pessoa inserida na tabela !");
                const resultado = yield exports.client.query("select * from persons");
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
    insertAll(person) {
        person;
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
exports.Person = Person;
