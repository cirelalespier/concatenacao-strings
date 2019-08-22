var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite seu nome: ", function(nome) {
    leitor.question("Digite seu sobrenome: ", function(sobrenome) {
        var espaco = " ";
        var nomeCompleto = nome.concat(espaco).concat(sobrenome);
        console.log(nomeCompleto)
        leitor.close();   
    });    
});

