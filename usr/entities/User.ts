const Client = require('pg').Client;
const config  = require ('../../.env')
export const client = new Client(config.pg);

export class User {
    private _id:number;
    private _name:string;
    private _username:string;
    private _password:string;
    constructor(id:number, name:string, username:string, password:string){
        this._id = id;
        this._name = name;
        this._username = username;
        this._password = password;
    };

    public async insert() {
        try{
        console.log("iniciando a conexão !")
        await client.connect()
        console.log("Conexão bem sucedida !")
        await client.query('insert into users("name", "username", "password") values ('+"'"+this._name+"', '"+this._username+"', '"+this._password+"');")
        console.log("User inserido na tabela!")
        const resultado = await client.query("select * from users")
        console.table(resultado.rows)
    }
    catch(ex){
        console.log("Ocorreu um erro no setUsers. Erro: "+ ex)
    }
    finally{
        client.end()
    }      
    };

    public async insertAll(users: any, res:any) {
        try{
        res.json("iniciando a conexão !!")
        await client.connect()
        res.json("Conexão bem sucedida !")
        for (let i = 0; users.length > i; i++){
        await client.query('insert into users("name", "username", "password") values ('+"'"+users[i].name+"', '"+users[i].username+"', '"+users[i].password+"');")
        }
        res.json("Users inseridos na tabela com sucesso!")
        const resultado = await client.query("select * from users")
        console.table(resultado.rows)
        let result = resultado.rows
        res.json(result)
        }
        catch(ex){
            res.json("Ocorreu um erro no setUsers. Erro: "+ ex)
        }
        finally{
            await client.end()
            res.json("Cliente desconectado !")
        }
    };

    public async insertItens() {
        
    };
    
    public async update() {
        try{
        console.log("Iniciando a conexão !")
        await client.connect()
        console.log('Bem sucedida !')
        await client.query("UPDATE users SET name = '"+this._name+"', username = '"+this._username+"', password = '"+this._password+"' WHERE id = '"+this._id+"';")
        console.log("user alterado da tabela")
        const resultado = await client.query("SELECT * FROM users")
        console.table(resultado.rows)
        }
        catch(ex){
        console.log("Ocorreu erro !!")
        }
        finally{
            await client.end()
            console.log("Cliente desconectado !!")
        }
    };

    public async findAll(){
        try{
        console.log("Iniciando a conexão !")
        await client.connect()
        console.log('Bem sucedida! ')
        const resultado = await client.query("SELECT * from users ")
        let user = resultado.rows
        console.table(user) 
        }
        catch(ex){
        console.log("Ocorreu erro !")
        }
        finally{
            await client.end()
            console.log("Cliente desconectado !")
            }
        };

    public async find(){
        console.log("iniciando uma conexão !");
        client.connect();
        console.log("Conexão bem sucedida !");
        const resultado = await client.query("SELECT *FROM users WHERE id =  '"+this._id+"';")
        let user = resultado.rows
        console.log(user) 
        client.end();
        console.log("Cliente desconectado !");
    };

    public async delete(){
        try{
        console.log("Iniciando a conexão !")
        await client.connect()
        console.log('Bem sucedida!')
        await client.query("DELETE FROM users WHERE name = '"+this._name+"';")
        console.log("user removido da tabela")
        const resultado = await client.query("SELECT * FROM users !")
        console.table(resultado.rows)
        }
        catch(ex){
        console.log("Ocorreu erro em user !")
        }
        finally{
            await client.end()
            console.log("Cliente desconectado !!")
            }
        };
    }