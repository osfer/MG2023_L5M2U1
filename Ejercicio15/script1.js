const users = [
        {username: 'ppc90', age: 30, premium: false},
        {username: 'lu65', age: 24, premium: true},
        {username: 'maria3', age: 36, premium: false},
        {username: 'abc123', age: 30, premium: false},
        {username: 'sergio58', age: 30, premium: true},
    ];


var standarUser = users.filter(user => 
    { 
        if(user.premium){
            console.log("El usuario "+user.username+" es un usuario Premium!!!")
        }
        return !user.premium 
    });
console.log("Listado de usuarios no premium: ", standarUser)