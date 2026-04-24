// com for
function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

// recursivo
function fatorialRecursivo(n) {
  if (n === 0) return 1;
  return n * fatorialRecursivo(n - 1);
}

console.log(fatorial(5));
console.log(fatorialRecursivo(5));