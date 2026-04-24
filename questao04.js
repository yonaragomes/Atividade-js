const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu ano de nascimento: ", (ano) => {
    
    const idade = 2026 - Number(ano);

    console.log(`Olá, ${nome}! Você tem aproximadamente ${idade} anos.`);

    rl.close();
  });
});
