//🟢 Nível 1 — Básico

//1. Verificar se a pessoa é maior de idade
//Crie uma variável idade.
//Se idade ≥ 18 → “Maior de idade”
//Senão → “Menor de idade”

let idade = 10;
if (idade >= 18) {
    console.log('Maior de idade!')
} else {
    console.log('Menor de idade!')
};

//2. Verificar número positivo ou negativo
//Crie uma variável numero.
//Se for maior que 0 → “Positivo”
//Senão → “Negativo ou zero”

let numero = 2
if (numero <= 0) {
    console.log('Negativo!')
} else {
    console.log('Positivo!')
};

//3. Comparar dois números
//Crie duas variáveis e mostre qual é maior
//ou se são iguais.

let numA = 15;
let numB = 15;
if (numA > numB) {
    console.log(`O número ${numA} é maior que o número ${numB}.`);
} else if (numB > numA) {
    console.log(`O número ${numB} é maior que o número ${numA}.`);
} else {
    console.log(`O número ${numA} e o número ${numB} são iguais.`);
};





//🟡 Nível 2 — Lógica leve
//4. Sistema de notas simples
//Crie uma variável nota (0 a 10).
//Se nota ≥ 6 → “Aprovado”
//Senão → “Reprovado”

let nota = 9;
if (nota > 6) {
    console.log(`Aprovado!`);
} else {
    console.log(`Reprovado!`);
}

//5. Descobrir se um número é par ou ímpar
//Dica: use %

let num = 7;
if ( num % 2 === 0) {
    console.log(`Número é par!`);
} else {
    console.log(`Número é impar!`);
};

//6. Verificar se a pessoa pode dirigir
//Variáveis: idade e temCarteira (true/false)
//Se idade ≥ 18 e temCarteira === true → “Pode dirigir”
//Senão → “Não pode dirigir”

let idade1 = 18;
let temCarteira = (true/false);
if ( idade1 >= 18 === true ) {
    console.log(`Pode Dirigir!`);
} else {
    console.log(`Não pode ditigir!`);
}




//🟠 Nível 3 — Desafios simples
//7. Calculadora simples
//Variáveis:a,b
//operacao (pode ser: "+", "-", "*", "/")
//Use if/else para:Somar,Subtrair,Multiplicar,Dividir
//Senão → “Operação inválida”

let a = 5;
let b = 10;
let operacao = '+';
let resultado;
if ( operacao === '+') {
    resultado = a + b;
    console.log(`Resultado da soma:`, resultado);
} else if ( operacao === '-') {
    resultado = a - b;
    console.log(`Resultado da subtração:`, resultado);
} else if ( operacao === '*') {
    resultado = a * b;
    console.log(`Resultado da multiplicação:`, resultado);
} else if ( operacao === '/') {
    resultado = a / b;
    console.log(`Resultado da divisão:`, resultado);
} else {
    console.log(`Operação inválida`);
};

//8. Verificar horário do dia
//Crie uma variável hora (0 a 23).
//0–11 → “Bom dia”
//12–17 → “Boa tarde”
//18–23 → “Boa noite”

let hora = 18;
if ( hora <= 11 ) {
    console.log(`Bom dia!`);
} else if ( hora <= 17 ) {
    console.log(`Boa tarde!`);
} else {
    console.log(`Boa noite`);
};
 
//9. Login simples
//Variáveis:
//usuario = "admin"
//senha = "1234"
//Se o usuário e senha estiverem corretos → “Bem-vindo”,
//senão → “Acesso negado”.

let usuario = 'admin';
let senha = '1234';
if ( usuario === `admin` && senha === `1234`) {
    console.log(`Bem-Vindo`);
} else {
    console.log(`Acesso Negado`);
};

//🔥 DESAFIO FINAL
//Crie uma variável idade e outra temPermissaoPais (true/false).
//Regras:
//Idade ≥ 18 → pode entrar
//Idade < 18 e temPermissaoPais → pode entrar
//Senão → não pode entrar

let idade2 = 17;
let temPermissaoPais = true;
if ( idade2 > 18) {
    console.log (`Pode entrar!`);
} else if ( idade2 < 18 === temPermissaoPais) {
    console.log(`Pode entrar!`);
} else {
    console.log(`Não pode entrar!`);
};