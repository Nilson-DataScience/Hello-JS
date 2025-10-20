console.log("Hello,Word")


// Como declarar valores na javascript

let valor; // Declaramos variáveis:
const valor2 = "Nuca vai ser alterado"; // Declaramos uma constante


// Boa práticas para declaração de variáveis:

// Proibido: declarar os valores com Número no começo, letra maiúscula no começo e 
// não é por que o js é case sensitive que vc pode fazer narquia na declaração.
// A falta de padronização entre os nomes das variáveis pode gerar muitos problemas
// no futuro da aplicação e os programadores não saberão 
// quando usar cada tipo de nomenclatura;

// Vamos verificar os dados primitivos: 

let dado;
var dado_f = 'usado em funções'
const dado_s = "nuca vai mudar"


dado = "hello, word"; 
console.log(dado,"string");
dado = 20;
console.log(dado,"number");
dado = 20.20
console.log(dado,"number");
dado = true
console.log(dado,"booleano");
