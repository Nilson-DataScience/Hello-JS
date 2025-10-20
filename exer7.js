console.log("Laço de Repetição")

player = {
    "vida": 100,
    "ataque": 1
}

monstro = {
    "vida": 50,
    "ataque": 1
}


function luta(player,monstro){
    while(true){
       monstro.vida =  monstro.vida - player.ataque
       player.vida =  player.vida - monstro.ataque
       if(player.vida === 0){
        console.log("Monstro Venceu")
        break
       }
       if(monstro.vida === 0){
        console.log("Player Venceu")
         break
       }

    }
}

luta(player,monstro)