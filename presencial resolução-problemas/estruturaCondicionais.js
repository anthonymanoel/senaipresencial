const quantidadeDeAlunos = 18;

for (let adalberto = 0; adalberto <= quantidadeDeAlunos; adalberto++) {
    if (adalberto === 0) {
        console.log ("o número é zero");
    } else if  (adalberto % 2 !=0) {
        console.log ("o número é impar: " + adalberto)
    } 
    // variável ${index} faz com que o percorrer dos  valores entre no meio da var 
    // sendo assim o numero aparece no meio da frase com isso, e sem esse código aparece no final
    else {
        console.log(`o número ${adalberto} é par`); 
    }
}
