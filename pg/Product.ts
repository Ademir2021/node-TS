import { Pg } from './Pg'
export class Product extends Pg{

    private _item_price:number;
    private _item_quant:number;
    private _item_total:number = 0
    constructor( id:number, name:string, item_price:number, item_quant:number){
        super( id, name)
        this._item_price = item_price
        this._item_quant = item_quant
        this._item_total = item_price * item_quant
    };

    public insert(): void {
        
    };

    public insertAll(): void {
        
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