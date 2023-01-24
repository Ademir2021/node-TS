const Client = require('pg').Client;
const user_db = require('./.env.json');
export const client = new Client(user_db);

 export abstract class Pg{
    protected _id:number;
    protected _name:string;
    constructor(id:number, name:string){
        this._id = id;
        this._name = name;
    };
    
    public abstract insert(): void;
    public abstract insertAll(): void;
    public abstract update(): void;
    public abstract findAll(): void;
    public abstract find(): void;
    public abstract delete(): void;

    }
