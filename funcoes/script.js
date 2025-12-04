//🟢 Nível 1 — Funções básicas
//1. Função que mostra uma mensagem
//Crie uma função chamada bemVindo
//que exibe no console: "Olá, seja bem-vindo!".

function bemVindo() {
  console.log("Olá, seja bem-vindo!");
}

//2. Função que recebe um nome
//Crie uma função saudar(nome)
//que exibe: "Olá, NOME".
//Exemplo:
//saudar("Bruno") → "Olá, Bruno"

function saudar(nome) {
    console.log(`Olá, ${nome}`);
}

//3. Função que soma dois números
//Crie uma função somar(a, b)
//que retorna a soma de a e b.

function somar(a, b) {
    return a + b
}





//🟡 Nível 2 — Funções com lógica
//4. Função que calcula a idade
//A função deve receber anoNascimento e retornar a idade atual.

function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

//5. Função que verifica se um número é par
//Retorna true se for par e false se for ímpar.

function ehPar(numero) {
    return numero % 2 === 0;
}

//6. Função que calcula o preço final
//Recebe dois valores:
//preco
//desconto
//Retorna o valor com desconto aplicado.

function precoFinal(preco, desconto) {
    return preco - desconto;
}




//🟠 Nível 3 — Desafios simples
//7. Função que retorna a maior idade
//Recebe três idades e retorna a maior delas.

function maiorIdade(a, b, c) {
    return Math.max(a,b,c);
};

//8. Função que retorna se a pessoa pode votar
//Regra:
//Menor de 16 → “Não vota”
//16 a 17 → “Voto opcional”
//18 ou mais → “Voto obrigatório”

function podeVotar(idade) {
    if (idade > 16) {
        return "Não vota";
    } else if (idade >= 16 && idade <18) {
        return "Voto opcional";
    } else {
        return "Voto Obrigatório";
    }
};

//9. Função calculadora
//Uma função chamada calcular(a, b, operador)
//O operador pode ser: "+", "-", "*", "/"
//Retorna o resultado.

function calcular(a, b, operador) {
    if (operador === "+") {
        return a + b;
    } else if (operador === "-") {
        return a - b;
    } else if (operador === "*") {
        return a * b;
    } else if (operador === "/") {
        return a / b;
    } else {
        return "Operação inválida";
    }
}





//🔥 DESAFIO FINAL
//Função senhaValida(senha)
//Regras:
//Se a senha tiver 8 ou mais caracteres → retorne "Senha forte"
//Se tiver entre 5 e 7 → "Senha média"
//Se tiver menos de 5 → "Senha fraca"