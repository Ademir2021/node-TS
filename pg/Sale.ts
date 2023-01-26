import { Pg } from './Pg'
import { client } from "./Pg";

export class Sale extends Pg{
    //private _num_sale:number = 0; //numero da venda
    private _id_product:number;
    private _amount:number = 0;
    private _val_product:number = 0;
    private _sum_total_item:number = 0;
    private _sum_total_itens:number = 0;
    private _sub_total_sale:number = 0;  //sub_total_sale as val_rec
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
        let disc = disc_sale
        this._total_sale = this._sub_total_sale - disc; // total da venda - desconto
        
    };

    public insert(): void {
        
    };
    
    public async insertAll(users:any) {
     users
    };
    
    public async insertItens(itensales:any) {
    
        try{
            console.log("iniciando a conexão !")
            await client.connect()
            console.log("Conexão bem sucedida !")

            console.log("consultdao a última venda")
            const resultado = await client.query("SELECT MAX(id_sale) FROM sales;")
            let id:number = 0
            id = resultado.rows[0].max
            let num_sale = id +1
            console.log(num_sale)

           console.log("inserindo os itens vendidos")
            for(let i=0; i > itensales.lenght; i++){
                let sum_total_item:number = 0
                sum_total_item = itensales[i].amount * itensales[i].val_product
            await client.query('INSERT INTO itens_sale("fk_sale", "fk_product", "amount_product", "val_product", "total_product") VALUES ('+"'"+num_sale+"', '"+itensales[i].id_product+"', '"+itensales[i].amount+"', '"+itensales[i].val_product+"','"+sum_total_item+"'); ")
            }
            console.log("Produtos inserido na tabela !")
            const result_itens = await client.query("select * from products")
            console.log(result_itens.rows)


            console.log("Lancando a Venda")
            await client.query('INSERT INTO sales("fk_name_pers", "val_rec", "disc_sale", "total_sale") VALUES ('+"'"+this._name+"', '"+this._sub_total_sale+"', '"+this._disc_sale+"', '"+this._total_sale+"');")
            //val_rec as sub_total_sale
            const result_sale = await client.query("select * from products")
            console.table(result_sale.rows)
            console.log("Venda efetuada com sucesso")
        }
       catch(ex){
           console.log("Ocorreu um erro !! Erro: "+ ex)
       }
       finally{
           await client.end()
           console.log("Cliente desconectado !!")
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
