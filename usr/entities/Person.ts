const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.pg);

export class Person{
    private _id:number;
    private _name:string;
    private _cpf:string;
    private _address:string;
    private _name_filial:number;
    constructor(id:number, name:string, cpf:string, address:string, name_filial:number){
        this._id = id;
        this._name = name;
        this._cpf = cpf;
        this._address = address;
        this._name_filial = name_filial
    };

    public async insert() {
        try{
        console.log("iniciando a conexão !")
        await client.connect()
        console.log("Conexão bem sucedida !")
        await client.query('insert into persons("name_pers","cpf_pers","address_pers","fk_name_filial") values ('+"'"+this._name+"', '"+this._cpf+"', '"+this._address+"', '"+this._name_filial+"');")
        console.log("Pessoa inserida na tabela !")
        const resultado = await client.query("select * from persons")
        console.table(resultado.rows) 
    }
   catch(ex){
       console.log("Ocorreu um erro !! Erro: "+ ex)
   }
   finally{
       await client.end()
       console.log("Cliente desconectado !!")
    }
    };

    public insertAll(person:any): any {
        person
    };

    public insertItens() {
        
    }

    public update(): void {
        
    };

    public find(): void {
        
    };

    public findAll(): void {
        
    };

    public delete(): void {
        
    };
}