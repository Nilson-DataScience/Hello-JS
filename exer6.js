console.log("\nFluxo de Condição\n")

const ou = "||";
const e = "&&";
const maior = ">";
const menor = "<";
const maiorIgual = ">=";
const menorIgual = "<=";

let dado, dado2;

dado = 11
dado2 = 9 

if(dado>dado2){
    console.log(parseInt(dado/dado2))
}else if (dado2%dado === 0){
    console.log(`O número ${dado2} é divisivel por ${dado}`)
}

// Agora faça um algoritmo que verifica se o número da variável x é divisivel por 
// 2, 3 , 4, 5, 6, 7, 8, 9
















const x = 560

for(let i = 0; i<8;i++){
    if(x%i===0){
        console.log(`${x} é divisivel por ${i}`)
}
    }
    