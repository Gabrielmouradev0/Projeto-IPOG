
function calcularINSS(salarioBruto) {
    let inss;
    if (salarioBruto <= 1045) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2089.6) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 3134.4) {
        inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 6101.06) {
        inss = salarioBruto * 0.14;
    } else {
        inss = 6101.06 * 0.14; 
    }
    return inss;
}

// Função para calcular o desconto de IR
function calcularIR(salarioBruto) {
    let ir;
    if (salarioBruto <= 1903.98) {
        ir = 0;
    } else if (salarioBruto <= 2826.65) {
        ir = (salarioBruto * 0.075) - 142.8;
    } else if (salarioBruto <= 3751.05) {
        ir = (salarioBruto * 0.15) - 354.8;
    } else if (salarioBruto <= 4664.68) {
        ir = (salarioBruto * 0.225) - 636.13;
    } else {
        ir = (salarioBruto * 0.275) - 869.36;
    }
    return ir;
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto) {
    const inss = calcularINSS(salarioBruto);
    const ir = calcularIR(salarioBruto);
    const salarioLiquido = salarioBruto - inss - ir;
    return salarioLiquido;
}

// Capturar o valor do salário bruto da linha de comando
const salarioBruto = parseFloat(process.argv[2]);

// Calcular o desconto de INSS
const descontoINSS = calcularINSS(salarioBruto);

// Calcular o desconto de IR
const descontoIR = calcularIR(salarioBruto);

// Calcular o salário líquido
const salarioLiquido = calcularSalarioLiquido(salarioBruto);

// Imprimir os resultados
console.log("Desconto de INSS: R$", descontoINSS.toFixed(2));
console.log("Desconto de IR: R$", descontoIR.toFixed(2));
console.log("Salário líquido: R$", salarioLiquido.toFixed(2));