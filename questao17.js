function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  else if (imc < 25) return "Normal";
  else if (imc < 30) return "Sobrepeso";
  else return "Obesidade";
}

const imc = calcularIMC(60, 1.65);

console.log(`IMC: ${imc.toFixed(2)}`);
console.log(classificarIMC(imc));