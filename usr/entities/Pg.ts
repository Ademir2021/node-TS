const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.pg);

 export abstract class Pg{
    protected _id:number = 0;
    protected _name:string | number;
    constructor(id:number, name:string | number){
        this._id = id;
        this._name = name;
    };
    
    public abstract insert(): void;
    public abstract insertAll(users:any, res:any): void;
    public abstract insertItens(itensales:any): void;
    public abstract update(): void;
    public abstract findAll(): void;
    public abstract find(): void;
    public abstract delete(): void;

    }
