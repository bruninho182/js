//Nível 1 — Básico

//1. Crie uma variável com seu nome e mostre no console.
let nome = 'Bruno';
console.log(nome);

//2. Crie duas variáveis com números e some elas.
let a = 5;
let b = 7;
console.log(a + b);

//3. Crie uma variável para idade e use template string para escrever: "Minha idade é X".
let idade = 29;
console.log(`Minha idade é ${idade}`);





//Nível 2 — Praticando operações

//4. Crie três variáveis: nome, idade, cidade.
let nome1 = 'Bruno';
let idade1 = 29;
let cidade = 'Taubaté-SP';

console.log(`Meu nome é ${nome1} eu tenho ${idade1} anos e sou da cidade de ${cidade}.`);

//5. Crie uma variável que guarda o preço de um produto.
//Crie outra com o desconto.
//Mostre o preço final.

let preco = 200;
let desconto = 35;
let precoFinal = preco - desconto;

console.log(precoFinal);

//6. Crie uma variável "anoAtual" e outra "anoNascimento".

let anoAtual = 2025;
let anoNascimento = 1996;
let calculoIdade = anoAtual - anoNascimento;

console.log(calculoIdade);





//Nível 3 — Pequenos desafios

//7. Crie uma variável com a temperatura em Celsius e converta para Fahrenheit.
//Fórmula:F = C * 1.8 + 32

let c = 25
let f = c * 1.8 + 32;

console.log(f);

//8. Crie uma variável com o salário mensal
//e outra com o valor que você quer economizar.
//Mostre quanto sobra após guardar o valor.

let salario = 1500
let economizar = 500
let sobra = salario - economizar;

console.log(sobra);

//9. Crie três variáveis com notas (0 a 10).
//Calcule a média.

let nota0 = 8
let nota1 = 10
let nota2 = 5
let media = nota0 + nota1 + nota2 / 3 ;

console.log(media);





//🔥 DESAFIO (bem simples)
//Crie uma variável chamada contador começando em 0.
//Some 1 nela três vezes usando:
//contador = contador + 1
//e depois mostre o valor final.

let contador = 0;
contador = contador + 1;
contador = contador + 1;
contador = contador + 1;
let valor = contador;

console.log(valor);