import { Pg } from './Pg'
import { client } from "./Pg";

export class Sale extends Pg{
    private _sale:number = 1; //numero da venda
    private _amount:number;
    private _val_product:number;
    private _total_product:number;
    private _sum_total_itens:number = 300;
    private _val_rec:number;
    private _disc_sale:number;
    private _total_sale:number;
    constructor(id:number,
                name:string | number, //Comprador
                amount:number, // Quantidade vendida
                val_product:number, //valor do itens
                disc_sale:number){ //Desconto total da venda 
        super(id, name)
        this._amount = amount; //quant item
        this._val_product = val_product; //valor item
        this._total_product = amount * val_product; // quant * valor do item
        this._disc_sale = disc_sale; // desconto no total dos itens
        this._val_rec = this._sum_total_itens // recebe os totais dos itens 
        this._total_sale = this._val_rec - disc_sale; // total da venda - desconto
    };

    public insert(): void {
        
    }

    public async insertItens() {
        try{
        console.log("iniciando a conexão !")
        await client.connect()
        console.log("Conexão bem sucedida !")
        // for(let i=0; i > itensales.lenght; i++){

        // }
        await client.query('insert into sales("fk_name_pers", "val_rec", "disc_sale", "total_sale") values ('+"'"+this._name+"', '"+this._val_rec+"', '"+this._disc_sale+"', '"+this._total_sale+"');")
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
        
    };
}
