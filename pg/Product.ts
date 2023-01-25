import { Pg } from './Pg'
import { client } from "./Pg";

export class Product extends Pg{
    private _price:number;
    private _price_min:number;
    private _brand:number;
    private _sector:number;
    constructor( id:number, name:string, price:number, price_min:number, brand:number, sector:number){
        super( id, name)
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
        await client.query('insert into products("descric_product", "val_product", "val_min_product", "fk_brand", "fk_sector") values ('+"'"+this._name+"', '"+this._price+"', '"+this._price_min+"', '"+this._brand+"', '"+this._sector+"');")
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

    public insertAll(product:any): any {
        product
    };

    public update(): void {
        
    };

    public find(): void {
        
    };

    public findAll(): void {
        
    };

    public delete(): void {
        
    }
}