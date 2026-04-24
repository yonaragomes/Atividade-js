const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5];

let soma = 0;

for (let nota of notas) {
  soma += nota;
}

const media = soma / notas.length;

console.log(`Média: ${media}`);


let acima = 0;

for (let nota of notas) {
  if (nota > media) {
    acima++;
  }
}

console.log(`Alunos acima da média: ${acima}`);