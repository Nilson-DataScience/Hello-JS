console.log("\n Criando Condicionais em Arrays \n")

const arrayCidade = ['Ribeirão Claro','São Paulo','Ourinhos'];

const idade = 25
const cidade = 'Ourinhos'

function comprarPassagem(){
    var comprado = false
    for(var i = 0; i<arrayCidade.length;i++){
        if(arrayCidade[i]==="Ourinhos"){
            comprado = true
        }
    }
    if(comprado === true){
        console.log("\nPassagem comprada")
    }else{
        ("\nDestino não encontrado")
    }
}




if(idade>=18){
    console.log("Você pode comprar a passagem")
    comprarPassagem()
}else{
    console.log("Você não pode comprar a passagem")
}

