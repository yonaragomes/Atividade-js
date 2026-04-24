const idade = 21;
const temCarteirinha = true;

let preco;

if (idade <= 12) {
  preco = 15;
} else if (idade >= 13 && idade <= 25 && temCarteirinha) {
  preco = 20;
} else if (idade >= 26 && idade <= 59) {
  preco = 30;
} else if (idade >= 60) {
  preco = 15;
}

console.log(`Valor do ingresso: R$ ${preco}`);