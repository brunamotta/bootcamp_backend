const fs = require("fs");

fs.writeFile("./aula04/files/arquivo2.txt", "Esse é meu segundo arquivo", function(err) {
    if(err) {
        return console.log(`Algo deu errado: ${err}`);
    }
});

fs.readFile("./aula04/files/arquivo2.txt","utf8", function(err, data) {
    if(err) {
        return console.log(`Algo deu errado: ${err}`);
    }
    
    console.log(data);
});

fs.rename("./aula04/files/arquivo2.txt", "./aula04/files/novo-nome.txt", function(err) {
    if(err) {
        return console.log(`Algo deu errado: ${err}`);
    }
    console.log("Arquivo renomeado com sucesso!");
});

fs.unlink("./aula04/files/novo-nome.txt", function(err) {
    if(err) {
        return console.log(`Algo deu errado: ${err}`);
    }
    console.log("Arquivo deletado com sucesso!");
});