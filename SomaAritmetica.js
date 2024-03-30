if (process.argv.length !== 4) {
    console.log('Por favor, forneça exatamente dois números como argumentos.');
    process.exit(1);
}

const valor1 = parseFloat(process.argv[2]);
const valor2 = parseFloat(process.argv[3]);

function calcularSoma(valor1, valor2) {
    return valor1 + valor2;
}

console.log(calcularSoma(valor1, valor2));