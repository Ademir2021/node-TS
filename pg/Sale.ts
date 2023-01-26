import { Pg } from './Pg'
import { client } from "./Pg";

export class Sale extends Pg{
    private _num_sale:number = 0
    private _id_product:number = 0;
    private _amount:number = 0;
    private _val_product:number = 0;
    private _sum_total_item:number = 0;
    private _sum_total_itens:number = 0;
    private _sub_total_sale:number = 0; //sub_total_sale as val_rec
    private _disc_sale:number = 0;
    private _total_sale:number = 0;
    constructor(id:number,
                name:string | number, //id comprador
                id_product:number, // id produto
                amount:number, // Quantidade vendida
                val_product:number, //valor do item
                disc_sale:number){ //Desconto total da venda 
        super(id, name)
        this._amount = amount; //quant item
        this._id_product = id_product; // id product
        this._val_product = val_product; //valor item
        this._sum_total_item = amount * val_product
        this._sum_total_itens += this._sum_total_item
        this._sub_total_sale = this._sum_total_itens;
        this._disc_sale = disc_sale; // desconto no total dos 
        this._total_sale = this._sub_total_sale - this._disc_sale; // total da venda - desconto
    };

    public insert(): void {
        
    };
    
    public async insertAll() {
     
    };
    
    public async insertItens(itensales:any) {
    
        try{
             console.log("iniciando a conexão !");
             await client.connect();
             console.log("Conexão bem sucedida !");
             console.log("consultado a última venda");
             const result_num_sale = await client.query("SELECT MAX(id_sale) FROM sales;");
             let id:number = 0;
             id = result_num_sale.rows[0].max;
             this._num_sale = id + 1;
             console.log(this._num_sale);
        
             console.log("inserindo os itens vendidos !!")
             for(let i= 0; itensales.length > i; i++){
             let sum_total_item:number = 0
             sum_total_item = itensales[i].amount * itensales[i].val_product;
             await client.query('insert into itens_sale("fk_sale", "fk_product", "amount_product", "val_product", "total_product") values ('+"'"+this._num_sale+"', '"+itensales[i].id_product+"', '"+itensales[i].amount+"', '"+itensales[i].val_product+"','"+sum_total_item+"');")
             }
             const result_itens = await client.query("SELECT * FROM itens_sale")
             let resultado = result_itens.rows
             console.log("Produtos inserido na tabela !!")
             console.table(resultado)

            console.log("Lancando a Venda")
            const result_total_itens = await client.query("SELECT SUM(total_product) AS total FROM itens_sale where fk_sale = '"+this._num_sale+"'")
            let sub_total_sale:number = 0
            sub_total_sale = result_total_itens.rows[0].total
            let total_sale:number = sub_total_sale -this._disc_sale

             await client.query('insert into sales("val_rec", "disc_sale", "total_sale") VALUES ('+"'"+sub_total_sale+"', '"+this._disc_sale+"', '"+total_sale+"');")
             //val_rec as sub_total_sale
             const result_sale = await client.query("select * from sales")
             console.table(result_sale.rows)
             console.log("Venda efetuada com sucesso")

        }
        catch(ex){
            console.log("Ocorreu um erro !! Erro: "+ ex);
        }
        finally{
            await client.end();
            console.log("Cliente desconectado !!");
         }
      
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
