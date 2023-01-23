import { Pg } from "./pg";
import { client } from "./pg";

export class Users extends Pg{
    constructor(id:number, name:string){
        super(id, name)
    };

    public insert() {
        //
    };
    
    public update() {
        //
    };

    public async findAll(){
        try{
            console.log("Iniciando a conexão!")
            await client.connect()
            console.log('Bem sucedida!')
            const resultado = await client.query("SELECT * from users ")
            let user = resultado.rows
            console.table(user) 
         }
            catch(ex){
            console.log("Ocorreu erro em users")
            }
            finally{
                await client.end()
                console.log("Cliente desconectado")
            }
        };

        public async find(){
            console.log("iniciando uma conexão");
            client.connect();
            console.log("Conexão bem sucedida!");
            const resultado = await client.query("SELECT *FROM users WHERE id =  '"+this._id+"';")
            let user = resultado.rows
            console.log(user) 
            client.end();
            console.log("Cliente desconectado.");
        };

    public async delete(){
        try{
            console.log("Iniciando a conexão!")
            await client.connect()
            console.log('Bem sucedida!')
           await client.query("DELETE FROM users WHERE name = '"+this._name+"';")
            console.log("user removido da tabela")
            const resultado = await client.query("SELECT * FROM users")
            console.table(resultado.rows)
         }
            catch(ex){
            console.log("Ocorreu erro em user")
            }
            finally{
                await client.end()
                console.log("Cliente desconectado")
            }
    };

}