import { Pg } from './Pg'
export class Product extends Pg{


    constructor( id:number, name:string){
        super( id, name)
     
    };

    public insert(): void {
        
    };

    public insertAll(users:any): any {
        users
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