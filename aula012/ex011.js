var idade = 60

//Condições aninhadas:

if (idade<16){
    console.log(`Você tem ${idade} e não vota!`)
}else if (idade <= 18 || idade>65){
    console.log(`Você tem ${idade} voto OPCIONAL!`)
}else{
    console.log(`Você tem ${idade} e vota obrigatóriamente`)
}