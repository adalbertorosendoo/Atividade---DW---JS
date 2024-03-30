// Verifica se foram fornecidos três argumentos (dois valores e um operador)
if (process.argv.length !== 5) {
    console.log('Por favor, forneça dois números e um operador como argumentos.');
    process.exit(1); // Encerra o script com código de erro
}

// Obtém os valores dos argumentos da linha de comando
const valor1 = parseFloat(process.argv[2]);
const valor2 = parseFloat(process.argv[3]);
const operador = process.argv[4];

// Função para calcular a operação
function calcularOperacao(valor1, valor2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "Erro: divisão por zero";
            }
            break;
        default:
            resultado = "Operador inválido";
    }

    return resultado;
}

// Exibe o resultado da operação
console.log(calcularOperacao(valor1, valor2, operador));
