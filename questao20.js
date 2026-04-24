function calculadora(a, b, operacao) {
  switch (operacao) {
    case "soma":
      return a + b;
    case "subtracao":
      return a - b;
    case "multiplicacao":
      return a * b;
    case "divisao":
      if (b === 0) return "Erro: divisão por zero";
      return a / b;
    default:
      return "Operação inválida";
  }
}

const operacoes = [
  { a: 10, b: 5, op: "soma" },
  { a: 20, b: 4, op: "divisao" },
  { a: 7, b: 0, op: "divisao" },
  { a: 3, b: 8, op: "multiplicacao" }
];

for (let item of operacoes) {
  console.log(calculadora(item.a, item.b, item.op));
}