class User{
    constructor(){
        this.id = 1
        this.users = [];
    };
    addUser(){
        const buttonAddUser = document.querySelector("#addUser");
        buttonAddUser.addEventListener("click", function(e){
        e.preventDefault();
        });
            let user = {};
            user.id = this.id;
            user.name = document.getElementById('name').value;
            user.email = document.getElementById('email').value;
            user.password = document.getElementById('password').value;
            return user
        };
    
        valFields(user){
        let msg = ''
        if(user.name == ''){msg += 'Digite o seu nome\n'};
        if(user.email == ''){msg += 'Digite seu email\n'};
        if(user.password == ''){msg += "- Digite sua senha\n"};
        if(msg != ''){
            alert(msg);
            return false;
        };
            return true;
    };

    getUserAdd(user){
        this.users.push(user);
        this.id++;
    }

    saveUser(){
        let user = this.addUser();
        if(this.valFields(user)){
            this.getUserAdd(user);
        }
        //Gravação no localStorage
        localStorage.setItem('users', JSON.stringify(this.users));
        //Leitura do LocalStorage
        let users = localStorage.getItem('users', this.users);
        document.getElementById('pUsers')
        .innerHTML = `${users}`
        //console.log(users)
     }
}

let user = new User();

user.saveUser()



