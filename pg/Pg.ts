const Client = require('pg').Client;
const user_db = require('./.env.json');
export const client = new Client(user_db);

 export abstract class Pg{
    protected _table:string = "table";
    protected _id:number;
    protected _name:string;
    constructor(table:string, id:number, name:string){
        this._table = table;
        this._id = id;
        this._name = name;
    };

    public get table():string {
        return this._table
    };
    
    public set table(table:string){
        this._table = table
    };
   
    public abstract insert(): void;
    public abstract update(): void;
    public abstract findAll(): void;
    public abstract find(): void;
    public abstract delete(): void;

    }
