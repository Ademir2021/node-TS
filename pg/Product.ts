import { Pg } from './Pg'
export class Product extends Pg{
    private _price:number
    constructor(table:string, id:number, name:string, price:number){
        super(table, id, name)
        this._price = price
        
    };

    public insert(): void {
        
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