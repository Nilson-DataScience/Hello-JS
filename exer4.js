console.log("\nTrabalhando com listas\n");

// maneira feita com baixa cognitividade

 const rib_claro = 'Ribeirão Claro';
 const saoPaulo = 'São Paulo';
 const ourinho = 'Ourinhos'


// maneira feita com alta cognitividade
let index = 0;
let quantidade = 1;
const arrayCidade = ['Ribeirão Claro','São Paulo','Ourinhos'];
const arrayConstruirCidade = new Array() // Cria um array  vazia

// adicionar novo item na  array 
arrayConstruirCidade.push('Ribeirão Claro','São Paulo','Ourinhos')

// mostrar um conteúdo expecifico
console.log(arrayCidade[index])

// remove o item selecionado por index e quantidade
arrayConstruirCidade.splice(index,quantidade)

console.log(arrayConstruirCidade)
