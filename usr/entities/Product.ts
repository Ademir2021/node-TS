const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.pg);

export class Product{
    private _id:number;
    private _name:string;
    private _price:number;
    private _price_min:number;
    private _brand:number;
    private _sector:number;
    constructor( id:number, name:string, price:number, price_min:number, brand:number, sector:number){
        this._id = id;
        this._name = name;
        this._price = price;
        this._price_min = price_min;
        this._brand = brand;
        this._sector = sector;  
    };

    public async insert() {
        try{
        console.log("iniciando a conexão !")
        await client.connect()
        console.log("Conexão bem sucedida !")
        await client.query('insert into products("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector") values ('+"'"+this._name+"', '"+this._price+"', '"+this._price_min+"', '"+this._brand+"', '"+this._sector+"');")
        console.log("Produto inserido na tabela !")
        const resultado = await client.query("select * from products")
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

    public async insertAll(products: any, res:any) {
        try{
        console.log("iniciando a conexão !!")
        await client.connect()
        console.log("Conexão bem sucedida !")
        for (let i = 0; products.length > i; i++){
        await client.query('INSERT INTO products("descric_product", "val_max_product", "val_min_product", "fk_brand", "fk_sector", "bar_code" ) VALUES ('+"'"+products[i].name+"', '"+products[i].price_max+"', '"+products[i].price_min+"', '"+products[i].brand+"', '"+products[i].sector+"', '"+products[i].bar_code+"');")
        }
        console.log("products inseridos na tabela com sucesso!")
        const resultado = await client.query("select * from products")
        console.table(resultado.rows)
        let result = resultado.rows
        console.log(result)
        }
        catch(ex){
            console.log("Ocorreu um erro no insertAll. Erro: "+ ex)
        }
        finally{
            await client.end()
            console.log("Cliente desconectado !")
        }
    };;

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