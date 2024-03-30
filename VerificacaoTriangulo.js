function verificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "none";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    }

    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || a === c || b === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

const lado1 = parseFloat(process.argv[2]);
const lado2 = parseFloat(process.argv[3]);
const lado3 = parseFloat(process.argv[4]);

if (process.argv.length !== 5 || isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    console.log('Por favor, forneça três números como argumentos para representar os lados do triângulo.');
    process.exit(1); // Encerra o script com código de erro
}

const resultado = verificarTriangulo(lado1, lado2, lado3);

console.log(resultado);