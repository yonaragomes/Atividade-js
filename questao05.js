const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a temperatura em Celsius: ", (c) => {
     const fahrenheit = Number(c) * 9/5 + 32;

    console.log(`${c}°C equivale a ${fahrenheit}°F`);

    rl.close();
});